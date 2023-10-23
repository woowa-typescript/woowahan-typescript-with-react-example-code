const replaceHyphen: (date: string | Date) => string | Date = (date) => {
  if (typeof date === “string”) {
  // 이 분기에서는 date의 타입이 string으로 추론된다
  return date.replace(/-/g, “/”);
  }

  return date;
};