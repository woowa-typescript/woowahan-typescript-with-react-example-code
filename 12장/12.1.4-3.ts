const fontSizes = {
  xl: "30px",
  // ...
};

const colors = {
  gray_100: "#222222",
  gray_200: "#444444",
  // ...
};

const depths = {
  origin: 0,
  foreground: 10,
  dialog: 100,
  // ...
};

const theme = {
  fontSizes,
  colors,
  depths,
};

declare module "styled-components" {
  type Theme = typeof theme;
  export type DefaultTheme = Theme;
}
