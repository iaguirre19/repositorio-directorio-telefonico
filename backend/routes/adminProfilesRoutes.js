import express  from "express";
const router = express.Router();
import {
    register, 
    profile, 
    confirmation,
    authenticator,
    forgottenPassword,
    verifyToken,
    newPassword,
} from "../controllers/adminControllers.js"
import checkAuth from "../middleware/authMiddleware.js";




router.post("/", register);
router.get("/confirmation/:token", confirmation);
router.post("/forgotten-password", forgottenPassword);
router.route("/forgotten-password/:token").get(verifyToken).post(newPassword);
// router.post("/search", search)
router.post("/login", authenticator);



// private area
router.get("/profile", checkAuth, profile);
export default router