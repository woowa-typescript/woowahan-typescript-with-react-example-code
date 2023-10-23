class Person {
  name: string;

  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Developer {
  name: string;

  age: number;

  sleepTime: number;

  constructor(name: string, age: number, sleepTime: number) {
    this.name = name;
    this.age = age;
    this.sleepTime = sleepTime;
  }
}

function greet(p: Person) {
  console.log(`Hello, I'm ${p.name}`);
}

const developer = new Developer("zig", 20, 7);

greet(developer); // Hello, I'm zig
