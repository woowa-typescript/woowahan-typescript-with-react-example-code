type SomeType = string | number;

interface SomeInterface {
    name: string;
    age?: number;
}

let foo: string = "LET";

const obj = {
name: "이름",
age: 10,
};
class MyClass {
name;
age;
constructor(name: string, age?: number) {
this.name = name;
this.age = age ?? 0;
}
}

const arrowFunction = () => {};

function normalFunction() { }

arrowFunction();

normalFunction();

const colin = new MyClass("colin");
