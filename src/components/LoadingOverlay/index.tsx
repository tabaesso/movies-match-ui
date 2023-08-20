import React from 'react';
import styled from 'styled-components';
import Spinner from '../Spinner';

interface LoadingOverlayProps {
  message: string;
  isLoading?: boolean;
}

const Message = styled.p`
  margin-top: 16px;
  font-size: 18px;
  color: white;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Garante que o overlay fique acima de outros elementos */
`;

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message, isLoading = true }) => (
  <>
    {isLoading && (
      <Overlay>
        <Spinner />
        <Message>{message}</Message>
      </Overlay>
    )
    }
  </>
);

export default LoadingOverlay;
