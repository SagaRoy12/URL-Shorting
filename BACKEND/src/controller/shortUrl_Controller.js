import {createShortUrlWithOutUserService} from "../services/shortUrl_Generate_Service.js"

export const createShortUrl = async (req, res)=>{
    const {url} = req.body // Extracting the URL from the request body
   const shortUrl = await createShortUrlWithOutUserService(url)
   res.send(process.env.APP_URL+shortUrl.short_url) // Sending the full URL with the short URL appended
}