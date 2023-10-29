const color = {
  white: "#ffffff",
  black: "#000000",
} as const;

type ColorSet = typeof color;

declare global {
  const _color: ColorSet;
}

const white = _color["white"];
