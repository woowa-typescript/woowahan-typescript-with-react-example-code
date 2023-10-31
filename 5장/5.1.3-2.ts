export const useGetRegisteredList = <T extends 'card' | 'appcard' | 'bank'>(
  type: T
): UseQueryResult<PayMethodType<T>[]> => {
  const url = `baeminpay/codes/${type === 'appcard' ? 'card' : type}`;

  const fetcher = fetcherFactory<PayMethodType<T>[]>({
    onSuccess: (res) => {
      const usablePocketList =
        res?.filter(
          (pocket: PocketInfo<Card> | PocketInfo<Bank>) =>
            pocket?.useType === 'USE'
        ) ?? [];
      return usablePocketList;
    },
  });
  
  const result = useCommonQuery<PayMethodType<T>[]>(url, undefined, fetcher);

  return result;
};