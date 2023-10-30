// 클래스 컴포넌트로 만들어진 Button 컴포넌트를 사용할 때
class WrappedButton extends React.Component {
  constructor() {
    this.buttonRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Button ref={this.buttonRef} />
      </div>
    );
  }
}
