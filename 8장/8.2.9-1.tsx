interface Props<T extends string> {
  onChangeA?: (selected: T) => void;
  onChangeB?(selected: T): void;
}

const Component = () => {
  const changeToPineApple = (selectedApple: "apple") => {
    console.log("this is pine" + selectedApple);
  };

  return (
    <Select
      // Error
      // onChangeA={changeToPineApple}
      // OK
      onChangeB={changeToPineApple}
    />
  );
};
