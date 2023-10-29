import { useRef } from "react";

const MyComponent = () => {
  const ref = useRef<HTMLInputElement>(null);
  
  const onClick = () => {
    ref.current?.focus();
  };
  
  return (
    <>
      <button onClick= {onClick}>ref에 포커스!</button>
      <input ref= {ref} />
    </>
  );
};

export default MyComponent;