const loaded_text: unknown; // 어딘가에서 unknown 타입 값을 전달받았다고 가정

const validateInputText = (text: string) => {
  if (text.length < 10) return "최소 10글자 이상 입력해야 합니다.";
  return "정상 입력된 값입니다.";
};

validateInputText(loaded_text as string); // as 키워드를 사용해서 string으로 강제하지 않으면 타입스크립트 컴파일러 단계에서 에러 발생
