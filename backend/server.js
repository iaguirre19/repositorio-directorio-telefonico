import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminProfilesRoutes.js";
const app = express();

app.use(express.json()) // esta linea convierte el POST en un archivo json legible

dotenv.config()
connectDB()

app.use("/api/userAdmin",  adminRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
