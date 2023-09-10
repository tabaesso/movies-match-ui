import React from 'react';
import { Container, Content } from '../../components/styles';
import { useNavigate } from 'react-router-dom';
import SignUpForm, { SignUpValues } from '../../components/Forms/SignUpForm';
import { useMutation } from '@tanstack/react-query';
import api from '../../services/api';
import LoadingOverlay from '../../components/LoadingOverlay';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUser: SignUpValues) => {
      return api.post('/users', newUser);
    },
    onSuccess: () => {
      toast.success('Conta criada com sucesso');
      navigate('/home');
    },
  });

  const onSubmit = React.useCallback((values: SignUpValues) => {
    mutation.mutate(values);
  }, [mutation]);

  return (
    <Container>
      <Content>
        <LoadingOverlay isLoading={mutation.isLoading} />
        <h3>Criar conta</h3>
        <SignUpForm onSubmit={onSubmit} />
      </Content>
    </Container>
  );
};

export default SignUp;