const onKeyDown = (event: React.KeyboardEvent) => {
  if (event.target instanceof HTMLInputElement && event.key === “Enter”) {
  // 이 분기에서는 event.target의 타입이 HTMLInputElement이며
  // event.key가 ‘Enter’이다
  event.target.blur();
  onCTAButtonClick(event);
  }
};