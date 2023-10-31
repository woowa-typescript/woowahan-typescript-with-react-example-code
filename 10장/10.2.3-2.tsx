import { atom } from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

import { useRecoilState } from 'recoil';
import { textState } from './';

export function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type='text' value= {text} onChange= {onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

setInterval(() => {
  myCart.increase();
}, 1000);