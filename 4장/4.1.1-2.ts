type BaseMenuItem = {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
}

type BaseCartItem = {
  quantity: number;
} & BaseMenuItem
