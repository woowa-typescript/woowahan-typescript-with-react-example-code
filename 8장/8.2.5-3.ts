const [fruit, changeFruit] = useState("apple");

// error가 아님
const func = () => {
  changeFruit("orange");
};
