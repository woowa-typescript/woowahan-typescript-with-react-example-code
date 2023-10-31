const array1: Array<number | string> = [1, "string"];
const array2: number[] | string[] = [1, "string"];

// 후자의 방식은 아래와 같이 선언할 수도 있다
const array3: (number | string)[] = [1, "string"];
