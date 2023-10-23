type ProductPrice = “10000” | “20000” | “5000”;

const getProductName = (productPrice: ProductPrice): string => {
  if (productPrice === “10000”) return “배민상품권 1만 원”;
  if (productPrice === “20000”) return “배민상품권 2만 원”;
  // if (productPrice === “5000”) return “배민상품권 5천 원”;
  else {
    exhaustiveCheck(productPrice); // Error: Argument of type ‘string’ is not assignable to parameter of type ‘never’
    return “배민상품권”;
  }
};

const exhaustiveCheck = (param: never) => {
  throw new Error(“type error!”);
};