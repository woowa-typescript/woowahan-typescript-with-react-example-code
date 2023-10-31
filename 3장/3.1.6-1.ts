enum ProgrammingLanguage {
  Typescript, // 0
  Javascript, // 1
  Java, // 2
  Python, // 3
  Kotlin, // 4
  Rust, // 5
  Go, // 6
}

// 각 멤버에게 접근하는 방식은 자바스크립트에서 객체의 속성에 접근하는 방식과 동일하다
ProgrammingLanguage.Typescript; // 0
ProgrammingLanguage.Rust; // 5
ProgrammingLanguage["Go"]; // 6

// 또한 역방향으로도 접근이 가능하다
ProgrammingLanguage[2]; // “Java”
