type Example = {
  a: number;
  b: string;
  c: boolean;
};

type IndexedAccess = Example["a"];
type IndexedAccess2 = Example["a" | "b"]; // number | string
type IndexedAccess3 = Example[keyof Example]; // number | string | boolean

type ExAlias = "b" | "c";
type IndexedAccess4 = Example[ExAlias]; // string | boolean
