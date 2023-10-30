const fruits = { apple: "사과", banana: "바나나", blueberry: "블루베리" };

const FruitSelect: VFC = () => {
  const [fruit, changeFruit] = useState<string | undefined>();

  return (
    <Select onChange={changeFruit} options={fruits} selectedOption={fruit} />
  );
};
