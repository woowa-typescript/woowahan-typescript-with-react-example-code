interface Props {
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

const Button: FC<Props> = ({ fontSize, backgroundColor, color, children }) => {
  return (
    <ButtonWrap
      fontSize= {fontSize}
      backgroundColor= {backgroundColor}
      color= {color}
    >
      {children}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button<Omit<Props, "onClick">>`
  color: ${({ color }) => theme.color[color ?? "default"]};
  background-color: ${({ backgroundColor }) =>
    theme.bgColor[backgroundColor ?? "default"]};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize ?? "default"]};
`;
