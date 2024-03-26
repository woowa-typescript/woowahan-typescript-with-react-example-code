const PromotionList = [
  { type: "product", name: "chicken" },
  { type: "product", name: "pizza" },
  { type: "card", name: "cheer-up" },
];

// type PromotionItemType = { type: string; name: string }
type PromotionItemType = typeof PromotionList[number];
