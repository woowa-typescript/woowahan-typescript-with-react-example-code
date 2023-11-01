type PayMethodType = PayMethodInfo<Card> | PayMethodInfo<Bank>;

export const useGetRegisteredList = (
  type: 'card' | 'appcard' | 'bank'
): UseQueryResult<PayMethodType[]> => {
  const url = `baeminpay/codes/${type === 'appcard' ? 'card' : type}`;
  const fetcher = fetcherFactory<PayMethodType[]>({
    onSuccess: (res) => {
      const usablePocketList =
        res?.filter(
          (pocket: PocketInfo<Card> | PocketInfo<Bank>) =>
            pocket?.useType === 'USE'
        ) ?? [];
      return usablePocketList;
    },
  });

  const result = useCommonQuery<PayMethodType[]>(url, undefined, fetcher);
  
  return result;
};