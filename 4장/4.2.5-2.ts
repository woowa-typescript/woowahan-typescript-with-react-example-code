const getAvailableDestinationNameList = async (): Promise<DestinationName[]> => {
  const data = await AxiosRequest<string[]>(“get”, “.../destinations”);
  const destinationNames: DestinationName[] = [];
  data?.forEach((str) => {
  if (isDestinationCode(str)) {
    destinationNames.push(DestinationNameSet[str]);
    /*
    isDestinationCode의 반환 값에 is를 사용하지 않고 boolean이라고 한다면 다음 에러가
    발생한다
    - Element implicitly has an ‘any’ type because expression of type ‘string’
    can’t be used to index type ‘Record<”MESSAGE_PLATFORM” | “COUPON_PLATFORM” | “BRAZE”,
    “통합메시지플랫폼” | “쿠폰대장간” | “braze”>’
    */
    }
  });
  return destinationNames;
};