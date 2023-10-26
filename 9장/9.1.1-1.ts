function useState<S>(
  initialState: S | (() => S)
  ): [S, Dispatch<SetStateAction<S>>];
  
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);