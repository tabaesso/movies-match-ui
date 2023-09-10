import React, { InputHTMLAttributes } from 'react';
import { Container, InputField } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = (props: InputProps) => {
  const {
    id,
    name, 
    type,
    placeholder,
    value,
    error,
    onChange,
  } = props;

  return (
    <Container>
      <InputField
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
      {error && <div className='error'>{error}</div>}
    </Container>
  );
};

export default Input;