import express, { Request, Response } from "express";
import mongoose from "mongoose";
import router from "./route";
import dotenv from "dotenv";

dotenv.config();
const productsRoute = router;
const DB_URL = process.env.DB_URL;
console.log(DB_URL);
mongoose
  .connect(DB_URL as string)
  .then(() => console.log("MongoDb conneted..."))
  .catch((err) => console.log(err));
// Constants
const PORT = 8080;

// App
const app = express();

//Middleware
app.use(express.json());

//Router
app.use("/api/products", productsRoute);

app.listen(PORT);
