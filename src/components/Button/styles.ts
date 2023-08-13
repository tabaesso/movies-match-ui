import styled from 'styled-components';

interface Button {
  buttonType: 'primary' | 'secondary';
}

export const Container = styled.button<Button>`
  padding: 10px;
  background-color: ${(props => props.buttonType === 'primary' ? '#007bff' : '#6c757d')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;