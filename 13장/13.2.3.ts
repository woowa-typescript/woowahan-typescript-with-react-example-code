// models/Cart.ts

export interface AddToCartRequest {
  body: {
    shopId: number;
    items: { itemId: number; quantity: number; salePrice: number }[];
    productId: number;
  };
  headers: IRequestHeader;
}

/**
 * 추천 상품 관련 class
 */

export class RecommendProduct {
  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getThumbnail(): string {
    return this.thumbnailImageUrl;
  }

  public getPrice(): RecommendProductPrice {
    return this.price;
  }

  public getCalculatedPrice(): number {
    const price = this.getPrice();
    return price.sale?.price ?? price.origin;
  }

  public getItems(): RecommendProductItem[] {
    return this.items;
  }

  public getType(): string {
    return this.type;
  }

  public getRef(): string {
    return this.ref;
  }

  constructor(init: any) {
    this.id = init.id;
    this.name = init.displayName;
    this.thumbnailImageUrl = init.thumbnailImageUrl;
    this.price = {
      sale: init.displayDiscounted
        ? {
            price: Math.floor(init.salePrice),
            percent: init.discountPercent,
          }
        : null,
      origin: Math.floor(init.retailPrice),
    };
    this.type = init.saleUnit;
    this.items = init.items.map((item) => {
      return {
        id: item.id,
        minQuantity: item.minCount,
        price: Math.floor(item.salePrice),
      };
    });
    this.ref = init.productRef;
  }

  private id: number;
  private name: string;
  private thumbnailImageUrl: string;
  private price: RecommendProductPrice;
  private items: RecommendProductItem[];
  private type: string;
  private ref: string;
}
