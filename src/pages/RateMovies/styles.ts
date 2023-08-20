import styled from 'styled-components';

export const RateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;