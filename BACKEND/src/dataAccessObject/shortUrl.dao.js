import ShortUrl from "../dbSchema/short.url.schema.js" // Importing the short URL schema


export const shortUrlSaver = async (generatedShortUrl , longUrl , userId)=>{
    const newShortUrl = new ShortUrl({  // instance to be saved in databse
        full_url: longUrl, // Full URL to be shortened
        short_url: generatedShortUrl, // Generating a unique short URL using nanoid
        clicks: 0 // Initializing clicks to 0
    })
    if (userId) {
        newShortUrl.user = userId // If a user ID is provided, associate it with the short URL
    }
   return await newShortUrl.save()  // return the saved document
}

export const findUrlFromShortUrl = async(shortUrl)=>{
    return await ShortUrl.findOneAndUpdate({ short_url : shortUrl}, {$inc:{clicks: 1}}) // Incrementing the click count for the short URL
}