interface TypeWithLength {
  length: number;
}

function exampleFunc2<T extends TypeWithLength>(arg: T): number {
  return arg.length;
}
