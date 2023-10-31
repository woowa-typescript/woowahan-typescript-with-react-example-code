interface useSelectPaginationProps<T> {
    categoryAtom: RecoilState<number>;
    filterAtom: RecoilState<string[]>; sortAtom:
    RecoilState<SortType>;
    fetcherFunc: (props: CommonListRequest) = > Promise<DefaultResponse<ContentListRes
    ponse<T>>>;
  }