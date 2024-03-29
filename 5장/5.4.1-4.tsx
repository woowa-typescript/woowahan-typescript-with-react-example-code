import React, { FC } from "react";
import styled from "styled-components";

const colors = {
  black: "#000000",
  gray: "#222222",
  white: "#FFFFFF",
  mint: "#2AC1BC",
};

const theme = {
  colors: {
    default: colors.gray,
    ...colors
  },
  backgroundColors: {
    default: colors.white,
    gray: colors.gray,
    mint: colors.mint,
    black: colors.black,
  },
  fontSize: {
    default: "16px",
    small: "14px",
    large: "18px",
  },
};

type ColorType = keyof typeof theme.colors;
type BackgroundColorType = keyof typeof theme.backgroundColors;
type FontSizeType = keyof typeof theme.fontSize;

interface Props {
  color?: ColorType;
  backgroundColor?: BackgroundColorType;
  fontSize?: FontSizeType;
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

const Button: FC<Props> = ({ fontSize, backgroundColor, color, children }) => {
  return (
    <ButtonWrap
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button<Omit<Props, "onClick">>`
  color: ${({ color }) => theme.colors[color ?? "default"]};
  background-color: ${({ backgroundColor }) =>
    theme.backgroundColors[backgroundColor ?? "default"]};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize ?? "default"]};
`;
