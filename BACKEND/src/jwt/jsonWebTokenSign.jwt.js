import jsonwebtoken from 'jsonwebtoken'

const jwtOptions = {
    expiresIn: '1h' // 1 hour
}

export const signedJsonWebToken = async (payload )=>{
    return await jsonwebtoken.sign(payload , process.env.JWT_SECRET , jwtOptions)
}
