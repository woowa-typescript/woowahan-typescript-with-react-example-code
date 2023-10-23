type BaseMenuItem = {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
};

type BaseCartItem = {
  quantity: number;
} & BaseMenuItem;

const baseCartItem: BaseCartItem = {
  itemName: “지은이네 떡볶이”,
  itemImageUrl: “https://www.woowahan.com/images/jieun-tteokbokkio.png”,
  itemDiscountAmount: 2000,
  stock: 100,
  quantity: 2,
};