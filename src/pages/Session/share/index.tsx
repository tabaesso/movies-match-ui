import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { Container, Content } from '../../../components/styles';
import LoadingOverlay from '../../../components/LoadingOverlay';
import { toast } from 'react-toastify';
import { CoordinatorContext } from '../current/components/CoordinatorContext';
import { EventTypes } from '../../../enums/EventTypes';

const ShareSession = () => {
  const { id } = useParams<{ id: string }>();

  const { session, error, isLoading, sendMessage } = useContext(CoordinatorContext);

  const navigate = useNavigate();

  const handleStartSession = React.useCallback(() => {
    if (!id) return;
    sendMessage(EventTypes.START_SESSION, { sessionId: id });
  }, [id, sendMessage]);

  const handleAccessSession = React.useCallback(() => {
    handleStartSession();
    navigate(`/session/${id}`);
  }, [handleStartSession, id, navigate]);

  React.useEffect(() => {
    if (!error) return;

    toast.error('Erro ao carregar sessão');
  }, [error]);

  return (
    <Container>
      <Link to='/home'>Voltar</Link>
      <LoadingOverlay isLoading={isLoading} />
      <Content>
        <>
          <h2>Sessão: {session?.name}</h2>
          <h3>Compartilhe o link com seus amigos!</h3>
          <input type="text" value={`${import.meta.env.VITE_BASE_URL}/session/${id}`} readOnly />
          <br />
          <Button buttontype='primary' onClick={handleAccessSession}>Começar!</Button>
        </>
      </Content>
    </Container>
  );
};

export default ShareSession;