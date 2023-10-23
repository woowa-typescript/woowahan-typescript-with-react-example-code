const a = 3 + []; // '3'
const b = null + 12; // 12

const obj = {};

obj.foo; // undefined

function foo(num) {
  return num / 2;
}

a("bar"); // NaN
