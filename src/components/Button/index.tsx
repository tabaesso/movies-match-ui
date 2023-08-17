import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'primary' | 'secondary';
  flex?: number;
  selected?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type,
    buttonType,
    flex,
    selected,
    onClick,
  } = props;

  return (
    <Container
      type={type}
      buttonType={buttonType}
      flex={flex}
      selected={selected}
      onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;