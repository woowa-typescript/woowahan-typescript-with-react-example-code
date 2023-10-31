let state: any;

state = { value: 0 }; // 객체를 할당해도
state = 100; // 숫자를 할당해도
state = "hello world"; // 문자열을 할당해도
state.foo.bar = () => console.log("this is any type"); // 심지어 중첩 구조로 들어가 함수를 할당해도 문제없다
