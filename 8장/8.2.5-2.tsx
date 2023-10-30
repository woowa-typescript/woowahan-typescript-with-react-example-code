// fruit: undefined;
// changeFruit: (v: React.SetStateAction<undefined>) => void;
const [fruit, changeFruit] = useState();

return (
  <Select
    // Error - SetStateAction<undefined>와 맞지 않음
    // (changeFruit에는 undefined만 매개변수로 넘길 수 있음)
    onChange={changeFruit}
    options={fruits}
    selectedOption={fruit}
  />
);
