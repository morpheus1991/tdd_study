import { NextFunction, Request, Response } from "express";
import Product from "./../models/Product";

export const hello = (req: Request, res: Response) => {
  res.send("안녕하세요");
};

export const productController = {
  createProduct: (req: Request, res: Response, next: NextFunction | null) => {
    console.log(req.body);
    Product.create(req.body);
  },
};
