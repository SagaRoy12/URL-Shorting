import jsonwebtoken from 'jsonwebtoken'

export const verifyJsonWebToken = async (token )=>{
    return await jsonwebtoken.verify(token , process.env.JWT_SECRET )
}