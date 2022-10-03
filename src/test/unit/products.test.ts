import { productController } from "../../controller/products";
import Product from "../../models/Product";
import httpmocks from "node-mocks-http";
import newProduct from "./../data/newProduct.json";
import { NextFunction, Request, Response } from "express";

const productModel = Product;

productModel.create = jest.fn();

let req: Request | undefined;
let res: Response | undefined;
let next: null | NextFunction;

beforeEach(() => {
  req = httpmocks.createRequest();
  res = httpmocks.createResponse();
  next = null;
});

describe("Product Controller create ", () => {
  beforeEach(() => {
    if (req) req.body = newProduct;
  });

  it("should hava a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });

  it("should call ProductModel.create", () => {
    productController.createProduct(req as Request, res as Response, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });
});
