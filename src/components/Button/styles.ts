import styled from 'styled-components';

interface Button {
  buttonType: 'primary' | 'secondary';
  flex?: number;
  selected?: boolean;
}

export const Container = styled.button<Button>`
  padding: 10px;
  background-color: ${(props => props.buttonType === 'primary' ? '#007bff' : '#6c757d')};
  ${(props) => props.flex && `flex: ${props.flex};`};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  border: ${(props) => props.selected ? '2px solid black' : 'none'};
`;