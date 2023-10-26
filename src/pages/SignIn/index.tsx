import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Content, JustifyRow } from '../../components/styles';
import useAuth from '../../hooks/useAuth';
import SignInForm, { SignInValues } from '../../components/Forms/SignInForm';
import { toast } from 'react-toastify';

const SignIn = () => {
  const { signIn, signOut } = useAuth();

  const navigate = useNavigate();

  const onSubmit = useCallback(async (values: SignInValues) => {
    await signIn(values);
    toast.success('Login realizado com sucesso');
    navigate('/home');
  }, [navigate, signIn]);

  React.useEffect(() => {
    signOut();
  }, [signOut]);

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