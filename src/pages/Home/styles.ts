import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const RankingContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  flex: 1;
  max-width: 100%;
  height: 250px;
  overflow-y: auto;
  width: 400px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    max-width: calc(50% - 20px);
  }
`;

export const RankingTitle = styled.div`
  display: flex;
  color: #333;
  font-weight: bold;
  flex: 1;
  font-size: 20px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  button {
    margin: 10px;
    padding: 10px 20px;
  }
`;