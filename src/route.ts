import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  res.send("");
});

export default router;
