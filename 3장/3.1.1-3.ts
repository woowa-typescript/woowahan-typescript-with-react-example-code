async function load() {
  const response = await fetch("https://api.com");
  const data = await response.json(); // response.json()의 리턴 타입은 Promise<any>로 정의되어 있다
  return data;
}
