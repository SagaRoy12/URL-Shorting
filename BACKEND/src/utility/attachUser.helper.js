import { findUserById } from "../dataAccessObject/userSearch.dao.js";
import { verifyJsonWebToken } from "../jwt/jsonWebTokenValidation.jwt.js";
export const attachUser= async(req, res , next)=>{
    const token = req.cookies["ACCES_TOKEN"]
    if(!token){
        return next() //if not hen move
    }
    try {
        const decodedToken = await verifyJsonWebToken(token)
        console.log(decodedToken);
        const user = await findUserById(decodedToken)
        console.log(`user is this one ${user.id}`);
        if(!user){
            return next() // if no user then just move to next middleware
        }
        req.user = user  // now as we got the user we are attaching it to the req object
        next()
    } catch (error) {
        console.log(error);
        next() // if any error then also move to next middleware
    }

}
