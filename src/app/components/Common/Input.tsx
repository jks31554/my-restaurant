import {
  CSSProperties,
  ChangeEvent,
  Ref,
  KeyboardEvent,
  forwardRef,
} from 'react';

type InputProps = {
  label: string;
  type: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, type, onChange, style, onKeyPress },
  ref
) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyPress) {
      onKeyPress(event);
    }
  };

  return (
    <div className='InputContainer'>
      <label
        style={{
          fontWeight: 'bold',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        onChange={handleInputChange}
        style={style}
        ref={ref}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default forwardRef<HTMLInputElement, InputProps>(Input);
