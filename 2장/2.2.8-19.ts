// enum이 값 공간에서 사용된 경우
enum MyColors {
  BLUE = "#0000FF",
  YELLOW = "#FFFF00",
  MINT = "#2AC1BC",
}

function whatMintColor(palette: { MINT: string }) {
  return palette.MINT;
}

whatMintColor(MyColors); // ✅
