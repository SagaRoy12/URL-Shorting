import {createShortUrlWithOutUserService} from "../services/shortUrl_Generate_Service.js"
import {findUrlFromShortUrl} from "../dataAccessObject/shortUrl.dao.js"
import ShortUrl from './src/dbSchema/short.url.schema.js'

export const createShortUrl = async (req, res)=>{
    const {url} = req.body // Extracting the URL from the request body
   const shortUrl = await createShortUrlWithOutUserService(url)
   res.send(process.env.APP_URL+shortUrl.short_url) // Sending the full URL with the short URL appended
}

// previous function has generated a ashort url annd now from taht showt url we find and redirect
export const redirectFromShortUrl = async (req, res)=>{
   const {shortUrl} = req.params // Extracting the short URL from the request parameters
   const url = await findUrlFromShortUrl(shortUrl) // Function to find the original URL from the short URL
    res.redirect (url)
}