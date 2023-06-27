import Express  from "express";
const router = Express.Router();
import{ createUser, getUser} from "../controllers/userController.js"

router.route("/").post(createUser).get(getUser);


export default router
