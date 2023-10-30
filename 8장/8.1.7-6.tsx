// 클래스 컴포넌트
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  render() {
    return <button ref={this.buttonRef}>버튼</button>;
  }
}

// 함수 컴포넌트
function Button(props) {
  const buttonRef = useRef(null);

  return <button ref={buttonRef}>버튼</button>;
}
