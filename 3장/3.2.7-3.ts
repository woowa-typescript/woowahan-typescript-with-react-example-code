function exampleFunc<T>(arg: T): T[] {
  return new Array(3).fill(arg);
}

exampleFunc("hello"); // T는 string으로 추론된다
