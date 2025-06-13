import { generateNanoid } from "../utility/helperFunction.js"
import {shortUrlSaver} from "../dataAccessObject/shortUrl.dao.js"

export const createShortUrlWithUserService= async(url) =>{
     const generatedShortUrl = generateNanoid(7) // Generating a unique short url using nanoId with a length of 7 characters 
     await shortUrlSaver(generatedShortUrl , url, userId) // Saving the generated short URL and the original URL to the database
    //console.log(newShortUrl);
    return newShortUrl
}
export const createShortUrlWithOutUserService= async(url) =>{
     const generatedShortUrl = generateNanoid(7) // Generating a unique short url using nanoId with a length of 7 characters 
     await shortUrlSaver(generatedShortUrl , url ) // Saving the generated short URL and the original URL to the database
    //console.log(newShortUrl);
    return newShortUrl
}