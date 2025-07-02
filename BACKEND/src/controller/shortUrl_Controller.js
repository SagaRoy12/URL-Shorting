import {createShortUrlWithUserService,createShortUrlWithOutUserService} from "../services/shortUrl_Generate_Service.js"
import {findUrlFromShortUrl} from "../dataAccessObject/shortUrl.dao.js"
import tryCatchWrapperForErrorHandeling from "../utility/tryCatchWrapper.js"


export const createShortUrlWithoutUser = tryCatchWrapperForErrorHandeling(async (req, res)=>{

    const {url} = req.body // Extracting the URL from the request body
    if (!url) {
        throw new Error("URL is required");
    }
    const shortUrl = await createShortUrlWithOutUserService(url) // Creating a short URL without associating it with a user
 
    res.send(process.env.APP_URL+shortUrl.short_url) // Sending the full URL with the short URL appended
 
})

export const createShortUrlWithUser = tryCatchWrapperForErrorHandeling(async (req, res) => {
     
      const {url} = req.body
     
       const userId = req.user?.id || "test-user-id" // Mock user ID for testing
       
       if (!url) {
           throw new Error("URL is required");
       }
       
       const shortUrl = await createShortUrlWithUserService(url, userId)
      
       res.send(process.env.APP_URL + shortUrl.short_url)
  
})


// previous function has generated a ashort url annd now from that showt url we find and redirect
export const redirectFromShortUrl = tryCatchWrapperForErrorHandeling(async (req, res) => {
   
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
   
})