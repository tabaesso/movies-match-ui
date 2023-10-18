import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%; /* Usando porcentagem para largura */
  max-width: 400px; /* Definindo largura máxima */
  margin: 5px 0;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 600px;
  overflow-y: auto;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
    max-width: 200px;
  }
`;

export const JustifyRow = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os links quebrem para a próxima linha em telas menores */
  gap: 10px;
  justify-content: center; /* Centraliza os links horizontalmente */
  padding: 10px 0;
`;