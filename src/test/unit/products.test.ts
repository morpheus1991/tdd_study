import { productController } from "../../controller/products";
import Product from "../../models/Product";
import httpmocks from "node-mocks-http";
import newProduct from "./../data/newProduct.json";
import { NextFunction, Request, Response } from "express";

const productModel = Product;

//productModel.create원래 있지만, 제스트 목 함수로 오버라이딩
productModel.create = jest.fn();

let req: httpmocks.MockRequest<any> | undefined;
let res: httpmocks.MockResponse<Response<any, Record<string, any>>> | undefined;
let next: null | NextFunction;

beforeEach(() => {
  // beforeEach: 해당 파일의 스코프에서 전역 사용 (재사용성), 다만 타입스크립트의 경우 위와 같은 타이핑 처리 필요
  req = httpmocks.createRequest();
  res = httpmocks.createResponse();
  next = null;
});

describe("Product Controller create ", () => {
  beforeEach(() => {
    // beforeEach: 해당 describe의 스코프에서 전역 사용 (재사용성)
    if (req) req.body = newProduct;
  });

  it("should hava a createProduct function", () => {
    //expect 기대하다 (이 값을).이거니?
    expect(typeof productController.createProduct).toBe("function");
  });

  it("should call ProductModel.create", () => {
    if (req) req.body = newProduct; //newProduct는 json 파일 import한 것임.

    productController.createProduct(req as Request, res as Response, next);
    // 위 작업을 실행 할 때 내부에서 Product.create 동작.
    // create자체를 실행시킬 수 없으니 위에서 productModel.create=jest.fn()으로 오버라이딩함.
    // 실행될 때 인자는 newproduct 일 것임
    expect(productModel.create).toBeCalledWith(newProduct);
  });
  it("should return 201 response code", () => {
    productController.createProduct(req as Request, res as Response, next);
    expect(res?.statusCode).toBe(201);
    //결과값 전송 여부 체크 send 혹은 json 등 처리 해줘야 truthy함.
    expect(res?._isEndCalled()).toBeTruthy();
  });
  it("should return json body in response", () => {
    const f = productModel.create as jest.Mock;
    //오버라이딩한 create 메소드의 리턴값은 newProduct임을 설정.
    f.mockReturnValue(newProduct);

    productController.createProduct(req as Request, res as Response, next);
    //목 데이터를 넣고 실행한 결과 값을 파싱하면, newProduct와 같음.
    //코드 흐름이 처음에 다소 혼란 스러웠음 몇번 더 보면서 익숙해져야함.
    expect(res?._getJSONData()).toStrictEqual(newProduct);
  });
});
