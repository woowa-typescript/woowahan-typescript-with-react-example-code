import { useState, useCallback } from "react";

// 🚨 Parameter ‘initialValue’ implicitly has an ‘any’ type.ts(7006)
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  // 🚨 Parameter ‘e’ implicitly has an ‘any’ type.ts(7006)
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
};

export default useInput;