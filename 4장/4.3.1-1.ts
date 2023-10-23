type TextError = {
  errorCode: string;
  errorMessage: string;
};
type ToastError = {
  errorCode: string;
  errorMessage: string;
  toastShowDuration: number; // 토스트를 띄워줄 시간
};
type AlertError = {
  errorCode: string;
  errorMessage: string;
  onConfirm: () => void; // 얼럿 창의 확인 버튼을 누른 뒤 액션
};
