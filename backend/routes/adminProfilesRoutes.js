import express  from "express";
const router = express.Router();
import {
    register, 
    profile, 
    confirmation,
    authenticator
} from "../controllers/adminControllers.js"

router.post("/", register);
router.get("/profile", profile);
router.get("/confirmation/:token", confirmation);
router.post("/login", authenticator);

export default router