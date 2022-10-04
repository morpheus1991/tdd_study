import { NextFunction, Request, Response } from "express";
import Product from "./../models/Product";

export const productController = {
  createProduct: async (
    req: Request,
    res: Response,
    next: NextFunction | null
  ) => {
    try {
      const createdProduct = await Product.create(req.body);
      console.log(createdProduct);
      res.status(201).json(createdProduct);
    } catch (error) {
      if (next) {
        next(error);
      }
    }
  },
};
