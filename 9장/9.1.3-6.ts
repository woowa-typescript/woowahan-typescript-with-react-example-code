interface ForwardRefRenderFunction<T, P = {}> {
  (props: P, ref: ForwardedRef<T>): ReactElement | null;
  displayName?: string | undefined;
  defaultProps?: never | undefined;
  propTypes?: never | undefined;
}