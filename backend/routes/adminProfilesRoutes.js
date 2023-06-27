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
    phoneBook
} from "../controllers/adminControllers.js"
import checkAuth from "../middleware/authMiddleware.js";




router.post("/", register);
router.get("/confirmation/:token", confirmation);
router.post("/forgotten-password", forgottenPassword);
router.route("/forgotten-password/:token").get(verifyToken).post(newPassword);
router.post("/login", authenticator);
// router.get("/phone-book", phoneBook);



// private area
router.get("/profile", checkAuth, profile);
export default router