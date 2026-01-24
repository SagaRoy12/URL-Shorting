import express from "express"
const router = express.Router()
import { registerUser, loginUser , getCurrentUser, logoutUser} from '../controller/authentication_Controller.js'
import { authenticateUserMiddleware } from '../middleware/authenticating.middleware.js'

router.post(`/register`, registerUser)

router.post(`/login`, loginUser)

router.post(`/logout`, logoutUser)

router.get(`/me`, authenticateUserMiddleware, getCurrentUser)

export default router