import {cookieOptions} from"../config/cookieOptions.config.js"
import jsonwebtoken from 'jsonwebtoken'

const jwtOptions = {
    expiresIn: cookieOptions.maxAge
}

export const signedJsonWebToken = async (payload )=>{
    return await jsonwebtoken.sign(payload , process.env.JWT_SECRET , jwtOptions)
}