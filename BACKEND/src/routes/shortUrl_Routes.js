import express from "express"
const router = express.Router()
import { createShortUrlWithoutUser, createShortUrlWithUser, createCustomUrl, redirectFromShortUrl } from '../controller/shortUrl_Controller.js'
import {authenticateUserMiddleware} from "../middleware/authenticating.middleware.js";


router.post(`/`, createShortUrlWithoutUser)

router.post(`/with-user`, authenticateUserMiddleware, createShortUrlWithUser)

router.post(`/custom`, createCustomUrl)


export default router