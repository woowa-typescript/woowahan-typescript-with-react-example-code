function useSelectPagination<
  T extends CardListContent | CommonProductResponse
>({
  filterAtom,
  sortAtom,
  fetcherFunc,
}: useSelectPaginationProps<T>): {
  intersectionRef: RefObject<HTMLDivElement>;
  data: T[];
  categoryId: number;
  isLoading: boolean;
  isEmpty: boolean;
} {
  // ...
}

// 사용하는 쪽 코드
const { intersectionRef, data, isLoading, isEmpty } =
  useSelectPagination<CardListContent>({
    categoryAtom: replyCardCategoryIdAtom,
    filterAtom: replyCardFilterAtom,
    sortAtom: replyCardSortAtom,
    fetcherFunc: fetchReplyCardListByThemeGroup,
  });
