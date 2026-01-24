import express from "express";
import { authenticateUserMiddleware } from "../middleware/authenticating.middleware.js";
import { getAllUrlsByUserController, deleteUrlController } from "../controller/userUrl_Controller.js";
const router = express.Router();

router.post(`/urls`, authenticateUserMiddleware, getAllUrlsByUserController);
router.delete(`/urls/:urlId`, authenticateUserMiddleware, deleteUrlController);
export default router; 
