import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  checked: boolean;
  value: string;
  onChange: () => void;
}

const CheckboxInput = styled.input`
  margin-right: 6px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, value, onChange }) => (
  <CheckboxLabel>
    <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
    {value}
  </CheckboxLabel>
);

export default Checkbox;
