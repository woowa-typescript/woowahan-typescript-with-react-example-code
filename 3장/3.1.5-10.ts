const useStateWithObject = (initialValue: any) => {
  // ...
  return { value, setValue };
};

const { value, setValue } = useStateWithObject(false); // 해당 함수에서 정의된 속성 이름으로 가져와야 한다
const { value: username, setValue: setUsername } = useStateWithObject(""); // 사용자정의 이름으로 사용하고 싶다면 일차적으로 먼저 접근한 다음에 다른 이름으로 지정할 수 있다
