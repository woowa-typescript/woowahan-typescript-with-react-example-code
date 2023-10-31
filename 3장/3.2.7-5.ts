function exampleFunc2<T>(arg: T): number {
  return arg.length; // 에러 발생: Property ‘length’ does not exist on type ‘T’
}
