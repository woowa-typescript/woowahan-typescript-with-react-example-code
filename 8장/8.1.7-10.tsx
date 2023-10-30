// forwardRef를 사용해 ref를 전달받을 수 있도록 구현
const Button = forwardRef((props, ref) => {
  return (
    <button ref={ref} {...props}>
      버튼
    </button>
  );
});

// buttonRef가 Button 컴포넌트의 button 태그를 바라볼 수 있다
const WrappedButton = () => {
  const buttonRef = useRef();

  return (
    <div>
      <Button ref={buttonRef} />
    </div>
  );
};
