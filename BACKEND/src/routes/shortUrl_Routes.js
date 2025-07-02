import express from  "express"
const router = express.Router()
import {createShortUrlWithoutUser , createShortUrlWithUser} from '../controller/shortUrl_Controller.js' 


router.post(`/`, createShortUrlWithoutUser )

router.post(`/with-user`, createShortUrlWithUser)

export default router