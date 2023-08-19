import React, { useCallback } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Content, JustifyRow } from '../../components/styles';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <Container>
      <Content>
        <h2>Login</h2>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button
          type='submit'
          buttonType='primary'
          onClick={handleSubmit}
        >
          Login
        </Button>
        <JustifyRow>
          <Link to="/forgot-password">Esqueci a senha</Link>
          <Link to="/sign-up">Criar conta</Link>
        </JustifyRow>
      </Content>
    </Container>
  );
};

export default SignIn;