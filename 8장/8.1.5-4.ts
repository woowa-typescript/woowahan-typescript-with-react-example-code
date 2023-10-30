type ReactFragment = {} | Iterable<ReactNode>; // ReactNode의 배열 형태
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
