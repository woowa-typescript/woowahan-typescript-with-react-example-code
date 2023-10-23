interface BaseMenuItem {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
  }

interface BaseCartItem extends BaseMenuItem {
  quantity: number;
}
