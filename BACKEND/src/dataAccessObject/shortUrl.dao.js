import ShortUrl from "../dbSchema/short.url.schema.js" // Importing the short URL schema


export const shortUrlSaver = async (generatedShortUrl , longUrl , userId)=>{
    const newShortUrl = new ShortUrl({  // instance to be saved in databse
        full_url: longUrl, // Full URL to be shortened
        short_url: generatedShortUrl, // Generating a unique short URL using nanoid
        clicks: 0 // Initializing clicks to 0
    })
    if (userId) {
        newShortUrl.userId = userId // If a user ID is provided, associate it with the short URL
    }
    newShortUrl.save()
}