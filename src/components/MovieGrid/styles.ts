import { styled } from 'styled-components';


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const MovieVote = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieCard = styled.button<{selected: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: 8px;
  padding: 5px;
  transition: transform 0.2s, box-shadow 0.2s;

  ${(props) => props.selected && `
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  `}

  &:hover {
    ${({ disabled }) => !disabled && `
      transform: scale(1.05);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    `};
  }

  &:focus {
    outline: none;
  }
`;

export const MovieTitle = styled.span`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`;