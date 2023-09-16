import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { Container, Content } from '../../../components/styles';
import { useQuery } from '@tanstack/react-query';
import api from '../../../services/api';
import LoadingOverlay from '../../../components/LoadingOverlay';
import { toast } from 'react-toastify';

const ShareSession = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const handleAccessSession = () => {
    navigate(`/session/${id}`);
  };

  const { isLoading, error, data, isFetching } = useQuery(['currentSession'], () =>
    api.get(
      `/sessions/${id}`
    ).then((res) => res.data)
  );

  React.useEffect(() => {
    if (!error) return;

    toast.error('Erro ao carregar sessão');
  }, [error]);

  return (
    <Container>
      <Link to='/home'>Voltar</Link>
      <LoadingOverlay isLoading={isLoading || isFetching} />
      <Content>
        <>
          <h3>Compartilhe o link com seus amigos!</h3>
          <input type="text" value={`${import.meta.env.VITE_BASE_URL}/session/${id}`} readOnly />
          <h4>Entraram na {data.name}:</h4>
          <ul>
            <li>Usuário 1</li>
            <li>Usuário 2</li>
            <li>Usuário 3</li>
          </ul>
          <Button buttonType='primary' onClick={handleAccessSession}>Começar!</Button>
        </>
      </Content>
    </Container>
  );
};

export default ShareSession;