interface SubmitEvent<T = HTMLElement> extends SyntheticEvent<T> {
  submitter: T;
}
