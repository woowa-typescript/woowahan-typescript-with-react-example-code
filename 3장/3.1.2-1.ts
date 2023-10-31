let unknownValue: unknown;

unknownValue = 100; // any 타입과 유사하게 숫자이든
unknownValue = "hello world"; // 문자열이든
unknownValue = () => console.log("this is any type"); // 함수이든상관없이할당이가능하지만

let someValue1: any = unknownValue; // (O) any 타입으로 선언된 변수를 제외한 다른 변수는 모두 할당이 불가
let someValue2: number = unknownValue; // (X)
let someValue3: string = unknownValue; // (X)
