ProgrammingLanguage[200]; // undefined를 출력하지만 별다른 에러를 발생시키지 않는다

// 다음과 같이 선언하면 위와 같은 문제를 방지할 수 있다
const enum ProgrammingLanguage {
  // ...
}
