
import styled from "@emotion/styled";

export const Button = styled.button<{ primary: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  margin: 0;
  color: ${({ primary }) => (primary ? "red" : "blue")};
`;
