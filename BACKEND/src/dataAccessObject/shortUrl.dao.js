import ShortUrl from "../dbSchema/short.url.schema.js" // Importing the short URL schema

// shortUrl dao helps to save the short url and long url in database    

export const shortUrlSaver = async (generatedShortUrl , longUrl , userId)=>{
   // console.log('DAO received userId:', userId); // Add this
    const newShortUrl = new ShortUrl({
        full_url: longUrl,
        short_url: generatedShortUrl,
        clicks: 0
    })
    if (userId) {
       // console.log('Setting user field to:', userId); // Add this
        newShortUrl.user = userId
    } else {
       // console.log('userId is falsy, not setting user field'); // Add this
    }
   return await newShortUrl.save()
}

export const findUrlFromShortUrl = async(shortUrl)=>{
    const result = await ShortUrl.findOneAndUpdate({ short_url : shortUrl}, {$inc:{clicks: 1}});
    return result;
}

export const findCustomShortUrl= async(slug) =>{
    return await ShortUrl.findOne({ short_url: slug})
    
}

export const findUrlByFullUrl = async(fullUrl, userId = null) => {
    const query = { full_url: fullUrl };
    if (userId) {
        query.user = userId;
    }
    return await ShortUrl.findOne(query);
}
