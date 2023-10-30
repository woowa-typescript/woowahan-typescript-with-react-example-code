const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

// 주의: 다음 구조는 단순화되었다
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {
      // ...
    }
    // ...
  }
}
