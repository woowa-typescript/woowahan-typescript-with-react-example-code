type ErrorFeedbackType = TextError | ToastError | AlertError;
const errorArr: ErrorFeedbackType[] = [
  { errorCode: “100”, errorMessage: “텍스트 에러” },
  { errorCode: “200”, errorMessage: “토스트 에러”, toastShowDuration: 3000 },
  { errorCode: “300”, errorMessage: “얼럿 에러”, onConfirm: () => {} },
];
