const enum NUMBER {
  ONE = 1,
  TWO = 2,
}
const myNumber: NUMBER = 100; // NUMBER enum에서 100을 관리하고 있지 않지만 이는 에러를 발생시키지 않는다

const enum STRING_NUMBER {
  ONE = "ONE",
  TWO = "TWO",
}
const myStringNumber: STRING_NUMBER = "THREE"; // Error
