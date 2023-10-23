/**
* 방법1 타입 내에서 속성 추가
* 기존 Menu 인터페이스에 추가된 정보를 전부 추가
*/
interface Menu {
  name: string;
  image: string;
  gif?: string; // 요구 사항 1. 특정 메뉴를 길게 누르면 gif 파일이 재생되어야 한다
  text?: string; // 요구 사항 2. 특정 메뉴는 이미지 대신 별도의 텍스트만 노출되어야 한다
}

/**
* 방법2 타입 확장 활용
* 기존 Menu 인터페이스는 유지한 채, 각 요구 사항에 따른 별도 타입을 만들어 확장시키는 구조
*/
interface Menu {
  name: string;
  image: string;
}

/**
* gif를 활용한 메뉴 타입
* Menu 인터페이스를 확장해서 반드시 gif 값을 갖도록 만든 타입
*/
interface SpecialMenu extends Menu {
  gif: string; // 요구 사항 1. 특정 메뉴를 길게 누르면 gif 파일이 재생되어야 한다
}

/**
* 별도의 텍스트를 활용한 메뉴 타입
* Menu 인터페이스를 확장해서 반드시 text 값을 갖도록 만든 타입
*/
interface PackageMenu extends Menu {
  text: string; // 요구 사항 2. 특정 메뉴는 이미지 대신 별도의 텍스트만 노출되어야 한다
}
