import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'primary' | 'secondary';
  selected?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type,
    buttonType,
    selected,
    onClick,
  } = props;

  return (
    <Container
      type={type}
      buttonType={buttonType}
      selected={selected}
      onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;