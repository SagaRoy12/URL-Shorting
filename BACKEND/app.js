import express from 'express'
const app = express()
const port = 3000
import dotenv from 'dotenv'
import { redirectFromShortUrl } from './src/controller/shortUrl_Controller.js'
import auth_route from './src/routes/authentication_Route.js'
import {errorHandeler} from './src/utility/errorHandeler.js'
import connectDB from './src/config/mongo.config.js' // Importing the MongoDB connection function
import short_urlRoute from './src/routes/shortUrl_Routes.js' // Importing the short URL routes
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { attachUser } from './src/utility/attachUser.helper.js'
dotenv.config("./.env") // Load environment variables from .env file
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true // Allow cookies to be sent
}))

app.use(cookieParser())

app.use(express.json())
app.use(attachUser)

app.use(express.urlencoded({ extended: true })) // for parsing th URL-encoded data

app.use("/api/auth" , auth_route);

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
