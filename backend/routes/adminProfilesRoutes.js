import express  from "express";
const router = express.Router();
import {register, profile} from "../controllers/adminRolesController.js"

router.post("/", register);
router.get("/profile", profile)


export default router