type ReadOnlyEx = {
  readonly a: number;
  readonly b: string;
};

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type ResultType = CreateMutable<ReadOnlyEx>; // { a: number; b: string }

type OptionalEx = {
  a?: number;
  b?: string;
  c: boolean;
};

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type ResultType = Concrete<OptionalEx>; // { a: number; b: string; c: boolean }
