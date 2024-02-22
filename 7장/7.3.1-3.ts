const onClickDeleteHistoryButton = async (id: string) => {
  try {
    await axios.post("https://....", { id });

    alert("주문 내역이 삭제되었습니다.");
  } catch (error: unknown) {
    if (isServerError(e) && e.response && e.response.data.errorMessage) {
      // 서버 에러일 때의 처리임을 명시적으로 알 수 있다 
      setErrorMessage(e.response.data.errorMessage);
      return;
    }
    setErrorMessage("일시적인 에러가 발생했습니다. 잠시 후 다시 시도해주세요");
  }
};
