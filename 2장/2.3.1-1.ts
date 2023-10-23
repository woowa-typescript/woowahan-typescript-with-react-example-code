const isEmpty: boolean = true;
const isLoading: boolean = false;

// errorAction.type과 ERROR_TEXT가 같은지 비교한 결괏값을 boolean 타입으로 반환하는 함수
function isTextError(errorCode: ErrorCodeType): boolean {
  const errorAction = getErrorAction(errorCode);
  if (errorAction) {
    return errorAction.type === ERROR_TEXT;
  }
  return false;
}
