import { useRef } from "react";

const Component = () => {
  const ref = useRef<HTMLInputElement>(null);
  return <MyInput ref= {ref} />;
};

interface Props {
  ref: RefObject<HTMLInputElement>;
}

/**
  * 🚨 Warning: MyInput: `ref` is not a prop. Trying to access it will result in
  `undefined` being returned
  * If you need to access the same value within the child component, you should pass
  it as a different prop
  */
const MyInput = ({ ref }: Props) => {
  return <input ref= {ref} />;
};