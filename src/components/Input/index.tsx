import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  const { 
    type,
    placeholder,
    value,
    onChange,
  } = props;

  return (
    <Container
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
  );
};

export default Input;