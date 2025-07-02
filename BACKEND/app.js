import express from 'express'
const app = express()
const port = 3000 
import dotenv from 'dotenv'
import { redirectFromShortUrl } from './src/controller/shortUrl_Controller.js' 
import ShortUrl from './src/dbSchema/short.url.schema.js'
dotenv.config("./.env") // Load environment variables from .env file
import {errorHandeler} from './src/utility/errorHandeler.js'
import connectDB from './src/config/mongo.config.js' // Importing the MongoDB connection function
import short_urlRoute from './src/routes/shortUrl_Routes.js' // Importing the short URL routes
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing th URL-encoded data

app.use("/api/create" , short_urlRoute);

app.get("/:shortenedUrl", redirectFromShortUrl) 

app.use(errorHandeler)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});
