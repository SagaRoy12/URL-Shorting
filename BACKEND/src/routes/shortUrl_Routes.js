import express from  "express"
const router = express.Router()
import {createShortUrl} from '../controller/shortUrl_Controller.js' 


router.post(`/`, createShortUrl )



export default router