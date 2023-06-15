import express  from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Desde API/userAdim");
})
router.get('/login', (req, res) => {
    res.send("Desde API/userAdim/login");
})

export default router