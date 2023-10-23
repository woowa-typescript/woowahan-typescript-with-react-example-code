/**
 * 수정할 수 있는 장바구니 요소 타입
 * 품절 여부, 수정할 수 있는 옵션 배열 정보가 추가되었다
 */
interface EditableCartItem extends BaseCartItem {
  isSoldOut: boolean;
  optionGroups: SelectableOptionGroup[]
}

/**
 * 이벤트 장바구니 요소 타입
 * 주문 가능 여부에 대한 정보가 추가되었다
 */
interface EventCartItem extends BaseCartItem {
  orderable: boolean;
}
