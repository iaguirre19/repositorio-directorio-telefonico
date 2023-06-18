import express  from "express";
const router = express.Router();
import {register, profile} from "../controllers/adminControllers.js"

router.post("/", register);
router.get("/profile", profile)


export default router