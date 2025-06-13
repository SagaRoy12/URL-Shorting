import express from 'express'
const app = express()
const port = 3000 
import dotenv from 'dotenv'
import ShortUrl from './src/dbSchema/short.url.schema.js'
dotenv.config("./.env") // Load environment variables from .env file

import connectDB from './src/config/mongo.config.js' // Importing the MongoDB connection function
import short_urlRoute from './src/routes/shortUrl_Routes.js' // Importing the short URL routes
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing th URL-encoded data

app.use("/api/create" , short_urlRoute);

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

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});
