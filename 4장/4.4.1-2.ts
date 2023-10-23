type ProductPrice = “10000” | “20000” | “5000”;

const getProductName = (productPrice: ProductPrice): string => {
  if (productPrice === “10000”) return “배민상품권 1만 원”;
  if (productPrice === “20000”) return “배민상품권 2만 원”;
  if (productPrice === “5000”) return “배민상품권 5천 원”; // 조건 추가 필요
  else {
    return “배민상품권”;
  }
};