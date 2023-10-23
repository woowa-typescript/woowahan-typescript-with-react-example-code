function add(x, y) {
  return x + y;
}

// 위 코드는 아래와 같이 암시적 타입 변환이 일어난다.
function add(x: any, y: any): any
