const theme = {
  fontSize: {
    default: "16px",
    small: "14px",
    large: "18px",
  },
  color: {
    white: "#FFFFFF",
    black: "#000000",
  },
};

type Theme = typeof theme;
type FontSize = keyof Theme["fontSize"];
type Color = keyof Theme["color"];
