import { FC } from 'react';

import { palette } from 'src/app/styles/colors';

type Props = {
  text: string;
  isValid: boolean;
};

export const AuthWarning: FC<Props> = ({ text, isValid }) => {
  return (
    <div style={{ height: '40px' }}>
      <span
        style={{
          fontSize: '12px',
          color: palette['warning'],
          display: isValid ? 'none' : 'initial',
        }}
      >
        {text}
      </span>
    </div>
  );
};
