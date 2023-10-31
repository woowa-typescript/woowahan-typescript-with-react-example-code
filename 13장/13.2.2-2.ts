// serializers/cart/addToCartRequest.ts

import { AddToCartRequest } from "models/externals/Cart/Request";
import { IRequestHeader } from "models/externals/lib";
import {
  RecommendProduct,
  RecommendProductItem,
} from "models/internals/Cart/RecommendProduct";
import { Product } from "models/internals/Stuff/Product";

interface Params {
  auths: IRequestHeader;
  cartProducts: Product[];
  shopID: number;
  target: RecommendProduct;
}

function addToCartRequest({
  auths,
  cartProducts,
  shopID,
  target,
}: Params): AddToCartRequest {
  const productAlreadyInCart = cartProducts.find(
    (product) => product.getId() === target.getId()
  );

  return {
    body: {
      items: target.getItems().map((item) => ({
        itemId: item.id,
        quantity: getItemQuantityFor(productAlreadyInCart, item),
        salePrice: item.price,
      })),
      productId: target.getId(),
      shopId: shopID,
    },
    headers: auths,
  };
}

export { addToCartRequest };
