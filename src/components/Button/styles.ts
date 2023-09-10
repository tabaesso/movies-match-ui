import styled from 'styled-components';

interface Button {
  buttonType: 'primary' | 'secondary';
  selected?: boolean;
}

export const Container = styled.button<Button>`
  padding: 10px;
  background-color: ${(props => props.buttonType === 'primary' ? '#007bff' : '#6c757d')};
  display: flex;
  flex: 1;
  flex-direction: column;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;

  border: ${(props) => props.selected ? '2px solid black' : 'none'};
`;