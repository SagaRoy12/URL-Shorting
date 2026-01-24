import { findUserById } from "../dataAccessObject/userSearch.dao.js";
import { verifyJsonWebToken } from "../jwt/jsonWebTokenValidation.jwt.js";

export const authenticateUserMiddleware = async (req, res, next) => {
    const token = req.cookies["ACCES_TOKEN"]
    if (!token) {
        return res.status(401).json({ message: "unauthenticated user ❌" })
    }
    try {
        const decodedToken = await verifyJsonWebToken(token)
        const user = await findUserById(decodedToken)
        if (!user) {
            return res.status(401).json({ message: "unauthenticated user ❌" })
        }
        req.user = user  // now as we got the user we are attaching it to the req object so that we can use it in the next controllers
        // console.log("AUTH MIDDLEWARE req.user is ------:", req.user);

        next()
    } catch (error) {
        return res.status(401).json({ message: "invalid token ❌" })
    }
}