import React from 'react';
import { Container } from './styles';
import { FunctionalComponent } from '../../interfaces/FunctionalComponent';

const FormikForm: FunctionalComponent = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
};

export default FormikForm;