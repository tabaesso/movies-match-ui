import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CreateSessionForm, { CreateSessionValues } from '../../../components/Forms/CreateSessionForm';
import { Container, Content } from '../../../components/styles';
import { useMutation } from '@tanstack/react-query';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import LoadingOverlay from '../../../components/LoadingOverlay';

const CreateSession = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newSession: CreateSessionValues) => {
      return api.post('/sessions', newSession);
    },
    onSuccess: (data) => {
      toast.success('Sessão criada com sucesso');
      navigate(`/share-session/${data.data.id}`);
    },
  });

  const handleSubmit = React.useCallback((values: CreateSessionValues) => {
    mutation.mutate(values);
  }, [mutation]);

  return (
    <Container>
      <LoadingOverlay isLoading={mutation.isLoading} />
      <Link to='/home'>Voltar</Link>
      <Content>
        <CreateSessionForm onSubmit={handleSubmit} />
      </Content>
    </Container>
  );
};

export default CreateSession;