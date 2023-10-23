// 정상
const noticePopup: { title: string; description: string } = {
  title: "IE 지원 종료 안내",
  description: "2022.07.15일부로 배민상회 IE 브라우저 지원을 종료합니다.",
};

// SyntaxError
const noticePopup: { title: string; description: string } = {
  title: "IE 지원 종료 안내",
  description: "2022.07.15일부로 배민상회 IE 브라우저 지원을 종료합니다.",
  startAt: "2022.07.15 10:00:00", // startAt은 지정한 타입에 존재하지 않으므로 오류
};
