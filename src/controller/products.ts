import { Request, Response } from "express";

export const hello = (req: Request, res: Response) => {
  res.send("안녕하세요");
};
