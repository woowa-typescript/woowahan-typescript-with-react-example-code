type PartialRecord<K extends string, T> = Partial<Record<K,T>>;
type Category = string;

interface Food {
  name: string;
  // ...
}

const foodByCategory: PartialRecord<Category, Food[]> = {
  한식: [{ name: "제육덮밥" }, { name: "뚝배기 불고기" }],
  일식: [{ name: "초밥" }, { name: "텐동" }],
};
  
foodByCategory["양식"]; // Food[] 또는 undefined 타입으로 추론
foodByCategory["양식"].map((food) => console.log(food.name)); // Object is possibly 'undefined'
foodByCategory["양식"]?.map((food) => console.log(food.name)); // OK
