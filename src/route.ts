import express, { Request, Response } from "express";
import { hello } from "./controller/products";

const router = express.Router();

router.get("/", hello);

router.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("");
});

export default router;
