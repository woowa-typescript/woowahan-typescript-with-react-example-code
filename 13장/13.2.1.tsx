// components/CartCloseoutDialog.tsx

import { useCartStore } from "store/modules/cart";

const CartCloseoutDialog: React.VFC = () => {
  const cartStore = useCartStore();

  return (
    <Dialog
      opened={cartStore.PresentationTracker.isDialogOpen("closeout")}
      title="마감 세일이란?"
      onRequestClose={cartStore.PresentationTracker.closeDialog}
    >
      <div
        css={css`
          margin-top: 8px;
        `}
      >
        지점별 한정 수량으로 제공되는 할인 상품입니다. 재고 소진 시 가격이
        달라질 수 있습니다. 유통기한이 다소 짧으나 좋은 품질의 상품입니다.
      </div>
    </Dialog>
  );
};

export default CartCloseoutDialog;
