import {cookieOptions} from"../config/cookieOptions.config.js"
import jsonwebtoken from 'jsonwebtoken'

export const signedJsonWebToken = async (payload )=>{
    return await jsonwebtoken.sign(payload , process.env.JWT_SECRET , cookieOptions)
}