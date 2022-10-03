import { productController } from "../../controller/products";
import Product from "../../models/Product";
import httpmocks from "node-mocks-http";
import newProduct from "./../data/newProduct.json";
import { NextFunction, Request, Response } from "express";

const productModel = Product;

productModel.create = jest.fn();

beforeEach(() => {
  let req = httpmocks.createRequest();
  let res = httpmocks.createResponse();
  let next = null;
});

describe("Product Controller create ", () => {
  beforeEach(() => {
    req.body = newProduct;
  });
  it("should hava a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
  it("should call ProductModel.create", () => {
    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });
});
