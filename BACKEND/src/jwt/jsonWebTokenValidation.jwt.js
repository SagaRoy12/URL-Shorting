import jsonwebtoken from 'jsonwebtoken'

export const verifyJsonWebToken = async (token )=>{
   const decodedToken =  await jsonwebtoken.verify(token , process.env.JWT_SECRET )
   console.log("decodedToken is ------:", decodedToken.id);
   return decodedToken.id
}