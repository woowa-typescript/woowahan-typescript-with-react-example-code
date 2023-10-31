type CardItem = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
};

type PromotionEventItem = ProductItem | CardItem;

const printPromotionItem = (item: PromotionEventItem) => {
  console.log(item.name); // O
  console.log(item.quantity); // 컴파일 에러 발생
};
