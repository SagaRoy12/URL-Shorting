import jsonwebtoken from "jsonwebtoken"
import User from "../dbSchema/user.schema.js"
import {createUser} from "../dataAccessObject/userCreate.dao.js"
import {findUserByEmail , findUserById} from "../dataAccessObject/userSearch.dao.js"
import {signedJsonWebToken} from "../jwt/jsonWebTokenSign.jwt.js"

export const registerUserService = async (name , email , password)=>{
    const user = await findUserByEmail(email)
    if(user){
        throw new Error ("this user already exists")
    }
    const newUser = await createUser(name , email , password)
    const token = await signedJsonWebToken({id:newUser._id})
    return token
}