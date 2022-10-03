import { productController } from "../../controller/products";

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("two plus two is not five", () => {
  expect(2 + 2).not.toBe(5);
});

describe("Product Controller create ", () => {
  it("should hava a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
});
