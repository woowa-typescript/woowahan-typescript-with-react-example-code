// HrComponent.tsx
export type Props = {
  height?: string;
  color?: keyof typeof colors;
  isFull?: boolean;
  className?: string;
  ...
}

export const Hr: VFC<Props> = ({ height, color, isFull, className }) => {
  ...

  return <HrComponent height= {height} color= {color} isFull= {isFull} className= {className} />;
};

// style.ts
import { Props } from '...';

type StyledProps = Pick<Props, "height" | "color" | "isFull">;

const HrComponent = styled.hr<StyledProps>`
  height: ${({ height }) = > height || "10px"};
  margin: 0;
  background-color: ${({ color }) = > colors[color || "gray7"]};
  border: none;
  ${({ isFull }) => isFull && css`
    margin: 0 -15px;
  `}
`;
