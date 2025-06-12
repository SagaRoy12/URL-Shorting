import express from 'express'
const app = express()
const port = 3000 
import dotenv from 'dotenv'
import ShortUrl from './src/config/dbSchema/short.url.schema.js'
dotenv.config("./.env") // Load environment variables from .env file
import { nanoid } from 'nanoid' 
import connectDB from './src/config/mongo.config.js' // Importing the MongoDB connection function

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing th URL-encoded data

app.post("/api/create" ,(req, res)=>{
    const {url} = req.body // Extracting the URL from the request body
    const generatedShortUrl = nanoid(7) // Generating a unique short URL using nanoid
    const newShortUrl = new ShortUrl({  // instance to be saved in databse
        full_url: url, // Full URL to be shortened
        short_url: generatedShortUrl, // Generating a unique short URL using nanoid
        clicks: 0 // Initializing clicks to 0
    })
    newShortUrl.save()
    //console.log(newShortUrl);
    res.send({
        success: true,
        message: "Short URL created successfully",
        data: newShortUrl // Sending the newly created short URL data in the response
    })
})

app.get("/:shortenedUrl", async (req, res) => {
    const {shortenedUrl} = req.params // Extracting the shortened URL from the request parameters
    try {
        const shortUrlData = await ShortUrl.findOne({ short_url: shortenedUrl }) // Finding the short URL in the database
        if (!shortUrlData) {
            return res.status(404).send({
                success: false,
                message: "Short URL not found"
            })
        }
        else{
        shortUrlData.clicks += 1 // Incrementing the click count
        await shortUrlData.save() // Saving the updated click count to the database
        res.redirect(shortUrlData.full_url) // Redirecting to the full URL just by entering the short url 
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({
            success: false,
            message: "Internal server error"
        })
    }
})

app.listen(port , ()=>{
    connectDB() // Connect to MongoDB
    console.log(`server is runnig on port http://localhost:${port}`);
})