import express from  "express"
const router = express.Router()
import {createShortUrlWithoutUser , createShortUrlWithUser , createCustomUrl} from '../controller/shortUrl_Controller.js' 


router.post(`/`, createShortUrlWithoutUser )

router.post(`/with-user`, createShortUrlWithUser)

router.post(`/custom` , createCustomUrl)

export default router