function isObject(value: object) {
  return (
    Object.prototype.toString.call(value).replace(/\[|\]|\s|object/g, "") === "Object"
  );
}
// 객체, 배열, 정규 표현식, 함수, 클래스 등 모두 object 타입과 호환된다
isObject({});
isObject({ name: "KG" });
isObject([0, 1, 2]);
isObject(new RegExp("object"));
isObject(() => {
  console.log("hello wolrd");
});
isObject(class Class {});
// 그러나 원시 타입은 호환되지 않는다
isObject(20); // false
isObject("KG"); // false
