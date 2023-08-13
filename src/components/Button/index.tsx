import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'primary' | 'secondary';
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type,
    buttonType,
    onClick,
  } = props;

  return (
    <Container
      type={type}
      buttonType={buttonType}
      onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;