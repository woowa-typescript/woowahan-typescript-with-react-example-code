// 할당하는 시점에서는 에러가 발생하지 않음
const unknownFunction: unknown = () => console.log("this is unknown type");

// 하지만 실행 시에는 에러가 발생; Error: Object is of type 'unknown'.ts (2571)
unknownFunction();
