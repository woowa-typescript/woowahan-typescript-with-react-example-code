const fn = () => console.log(1);
const array = [1, "string", fn]; // 자바스크립트에서는 배열에 숫자, 문자열, 함수 등 다양한 값을 삽입할 수 있다

array[0]; // 1
array[1]; // string
array[2](); // 1
