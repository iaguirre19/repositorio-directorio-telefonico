import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import AdminProfiles from "./models/AdminProfiles.js";
import router from "./routes/adminProfilesRoutes.js";
router
const app = express();

dotenv.config()


connectDB()

app.use("/api/userAdmin",  router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`servidor funcionando en el puerto ${PORT}`);
});
