import {createShortUrlWithOutUserService} from "../services/shortUrl_Generate_Service.js"
import {findUrlFromShortUrl} from "../dataAccessObject/shortUrl.dao.js"
import ShortUrl from "../dbSchema/short.url.schema.js"

export const createShortUrl = async (req, res, next)=>{
   try{
    const {url} = req.body // Extracting the URL from the request body
   const shortUrl = await createShortUrlWithOutUserService(url)
   res.send(process.env.APP_URL+shortUrl.short_url) // Sending the full URL with the short URL appended
 }
catch(err){
    next(err)
 }
}

// previous function has generated a ashort url annd now from that showt url we find and redirect
export const redirectFromShortUrl = async (req, res, next) => {
   try {
       // Extracting the short URL from the request parameters
       const shortenedUrl = req.params.shortenedUrl;
       
       // Find the URL in database
       const url = await findUrlFromShortUrl(shortenedUrl);
       
       // Check if URL exists before trying to access properties
       if (!url) {
           return res.status(404).send('Short URL not found');
       }
       
       // Now it's safe to access url.full_url
       return res.redirect(url.full_url);
   } catch (err) {
       next(err);
   }
}