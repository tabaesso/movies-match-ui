import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Content, JustifyRow } from '../../components/styles';
import useAuth from '../../hooks/useAuth';
import SignInForm, { SignInValues } from './form';

const SignIn = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const onSubmit = useCallback(async (values: SignInValues) => {
    await signIn(values);
    navigate('/home');
  }, [navigate, signIn]);

  return (
    <Container>
      <Content>
        <h2>Login</h2>
        <SignInForm onSubmit={onSubmit} />
        <JustifyRow>
          <Link to="/forgot-password">Esqueci a senha</Link>
          <Link to="/sign-up">Criar conta</Link>
        </JustifyRow>
      </Content>
    </Container>
  );
};

export default SignIn;