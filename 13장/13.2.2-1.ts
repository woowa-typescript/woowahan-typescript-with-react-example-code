// store/cart.ts

class CartStore {
  public async add(target: RecommendProduct): Promise<void> {
    const response = await addToCart(
      addToCartRequest({
        auths: this.requestInfo.AuthHeaders,
        cartProducts: this.productsTracker.PurchasableProducts,
        shopID: this.shopID,
        target,
      })
    );

    return response.fork(
      (error, _, statusCode) => {
        switch (statusCode) {
          case ResponseStatus.FAILURE:
            this.presentationTracker.pushToast(error);
            break;
          case ResponseStatus.CLIENT_ERROR:
            this.presentationTracker.pushToast(
              "네트워크가 연결되지 않았습니다."
            );
            break;
          default:
            this.presentationTracker.pushToast(
              "연결 상태가 일시적으로 불안정합니다."
            );
        }
      },
      (message) => this.applyAddedProduct(target, message)
    );
  }
}

const [CartStoreProvider, useCartStore] = setupContext<CartStore>("CartStore");
export { CartStore, CartStoreProvider, useCartStore };
