import { useState, useCallback, ChangeEvent } from "react";

// ✅ initialValue에 string 타입을 정의
const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  // ✅ 이벤트 객체인 e에 ChangeEvent<HTMLInputElement> 타입을 정의
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
};

export default useInput;