import jsonwebtoken from 'jsonwebtoken'

export const verifyJsonWebToken = async (token )=>{
   const decodedToken =  await jsonwebtoken.verify(token , process.env.JWT_SECRET )
   console.log(decodedToken.id)
   return decodedToken.id
}