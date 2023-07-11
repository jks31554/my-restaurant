import React, { CSSProperties, FC } from 'react';

type TitleProps = {
  text: string;
  style?: CSSProperties;
};

const Title: FC<TitleProps> = ({ text, style }) => {
  return <h1 style={style}>{text}</h1>;
};

export default Title;

// const Title: FC<PropsWithChildren<TitleProps>> = ({ children, style }) => {
//   return <h1 style={style}>{children}</h1>;
// };
