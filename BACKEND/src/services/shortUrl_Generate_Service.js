import { generateNanoid } from "../utility/helperFunction.js"
import {shortUrlSaver} from "../dataAccessObject/shortUrl.dao.js"

export const createShortUrlWithUserService= async(url, userId) =>{
     const generatedShortUrlWithUser = generateNanoid(7) // Generating a unique short url using nanoId with a length of 7 characters 
          if(!generatedShortUrlWithUser){
        throw new Error("Short url not generated")
     }
   const savedUrl=  await shortUrlSaver(generatedShortUrlWithUser , url, userId) // Saving the generated short URL and the original URL to the database
    
    return  savedUrl;
}
export const createShortUrlWithOutUserService= async(url) =>{
     const generatedShortUrlWithoutUser = generateNanoid(7) // Generating a unique short url using nanoId with a length of 7 characters 
     if(!generatedShortUrlWithoutUser){
        throw new Error("Short url not generated")
     }
    const savedUrl = await shortUrlSaver(generatedShortUrlWithoutUser , url ) // Saving the generated short URL and the original URL to the database
    //console.log(newShortUrl);
    return savedUrl
}