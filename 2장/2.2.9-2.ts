interface Person {
  first: string;
  last: string;
}

const person: Person = { first: "zig", last: "song" };

function email(options: { person: Person; subject: string; body: string }) {}
