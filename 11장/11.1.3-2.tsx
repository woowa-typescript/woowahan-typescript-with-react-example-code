import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonRadius = "xs" | "s" | "m" | "l";

export const buttonRadiusStyleMap: Record<ButtonRadius, SerializedStyles> = {
  xs: css`
    border-radius: ${radius.extra_small};
  `,
  s: css`
    border-radius: ${radius.small};
  `,
  m: css`
    border-radius: ${radius.medium};
  `,
  l: css`
    border-radius: ${radius.large};
  `,
  };

export const Button = styled.button<{ radius: string }>`
  ${({ radius }) => css`
    /* ...기타 스타일은 생략 */
    ${buttonRadiusStyleMap[radius]}
  `}
`;
