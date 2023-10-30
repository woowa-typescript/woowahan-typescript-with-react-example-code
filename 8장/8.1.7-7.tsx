type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

// 클래스 컴포넌트
class Button extends React.Component {
  constructor(ref: NativeButtonProps["ref"]) {
    this.buttonRef = ref;
  }

  render() {
    return <button ref={this.buttonRef}>버튼</button>;
  }
}

// 함수 컴포넌트
function Button(ref: NativeButtonProps["ref"]) {
  const buttonRef = useRef(null);

  return <button ref={buttonRef}>버튼</button>;
}
