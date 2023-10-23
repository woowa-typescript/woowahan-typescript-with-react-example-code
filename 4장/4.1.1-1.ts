/**
* 메뉴 요소 타입
* 메뉴 이름, 이미지, 할인율, 재고 정보를 담고 있다
* */
interface BaseMenuItem {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
}

/**
 * 장바구니 요소 타입
 * 메뉴 타입에 수량 정보가 추가되었다
 */
interface BaseCartItem extends BaseMenuItem {
  quantity: number;
}
