interface A {
  value: “a”; // unit type
  answer: 1;
}

interface B {
  value: string; // not unit type
  answer: 2;
}

interface C {
  value: Error; // instantiable type
  answer: 3;
}

type Unions = A | B | C;
function handle(param: Unions) {
  /** 판별자가 value일 때 */
  param.answer; // 1 | 2 | 3
  // ‘a’가 리터럴 타입이므로 타입이 좁혀진다.
  // 단, 이는 string 타입에 포함되므로 param은 A 또는 B 타입으로 좁혀진다
  if (param.value === “a”) {
    param.answer; // 1 | 2 return;
  }
  // 유닛 타입이 아니거나 인스턴스화할 수 있는 타입일 경우 타입이 좁혀지지 않는다
  if (typeof param.value === “string”) {
    param.answer; // 1 | 2 | 3 return;
  }
  if (param.value instanceof Error) {
    param.answer; // 1 | 2 | 3 return;
  }
  /** 판별자가 answer일 때 */
  param.value; // string | Error
  // 판별자가 유닛 타입이므로 타입이 좁혀진다
  if (param.answer === 1) {
    param.value; // ‘a’
  }
}