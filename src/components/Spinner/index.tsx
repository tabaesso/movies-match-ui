import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';

const SpinnerComponent = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  font-size: 40px;
`;

const Spinner = () => (
  <SpinnerComponent />
);

export default Spinner;