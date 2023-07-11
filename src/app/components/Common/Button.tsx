import { FC } from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

const Button: FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
