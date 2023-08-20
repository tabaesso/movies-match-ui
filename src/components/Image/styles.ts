import styled from 'styled-components';

export const Container = styled.img<{ size: string }>`
  max-width: 100%;
  height: ${({ size }) => size === 'medium' ? '150px' : '300px'}; /* Altura fixa para as imagens */
  object-fit: cover; /* Para preencher o espaço mantendo a proporção */
`;