import React from 'react';
import { Container, Content } from '../../components/styles';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h3>Recuperação de senha</h3>
        <span>Em breve...</span>
        <Button buttonType='primary' onClick={() => navigate('/')}>Voltar</Button>
      </Content>
    </Container>
  );
};

export default ForgotPassword;