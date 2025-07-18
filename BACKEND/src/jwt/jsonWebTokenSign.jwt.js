import {cookieOptions} from"../config/cookieOptions.config.js"

export const signedJsonWebToken = async (payload )=>{
    return await jsonwebtoken.sign(payload , process.env.JWT_SECRET , cookieOptions)
}