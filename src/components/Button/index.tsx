import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttontype: 'primary' | 'secondary';
  selected?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type,
    buttontype,
    selected,
    onClick,
  } = props;

  return (
    <Container
      type={type}
      buttontype={buttontype}
      selected={selected}
      onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;