type Category = "한식" | "일식";
interface Food {
name: string;
// ...
}
const foodByCategory: Record<Category, Food[]> = {
  한식: [{ name: "제육덮밥" }, { name: "뚝배기 불고기" }],
  일식: [{ name: "초밥" }, { name: "텐동" }],
};

// Property ‘양식’ does not exist on type ‘Record<Category, Food[]>’.
foodByCategory["양식"];
