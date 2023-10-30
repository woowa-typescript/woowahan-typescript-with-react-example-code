type Fruit = keyof typeof fruits; // 'apple' | 'banana' | 'blueberry';
const [fruit, changeFruit] = useState<Fruit | undefined>("apple");

// 에러 발생
const func = () => {
  changeFruit("orange");
};
