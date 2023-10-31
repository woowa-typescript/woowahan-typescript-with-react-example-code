// apis/Cart.ts

// APIResponse는 데이터 로드에 성공한 상태와 실패한 상태의 반환 값을 제네릭하게 표현해주는 API 응답 객체이다
// (APIResponse<OK, Error>)
interface APIResponse<OK, Error> {
  // API 응답에 성공한 경우의 데이터 형식
  ok: OK;
  // API 응답에 실패한 경우의 에러 형식
  error: Error;
}

export const addToCart = async (
  param: AddToCartRequest
): Promise<APIResponse<string, string>> => {
  return (await GatewayAPI.post<IAddCartResponse>("/v3/cart", param)).map(
    (data) => data.message
  );
};
