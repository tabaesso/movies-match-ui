import React from 'react';
import { Container, Content } from '../../components/styles';
import { useNavigate } from 'react-router-dom';
import SignUpForm, { SignUpValues } from '../../components/Forms/SignUpForm';

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = React.useCallback((values: SignUpValues) => {
    console.log(values);
    navigate('/home');
  }, [navigate]);

  return (
    <Container>
      <Content>
        <h3>Criar conta</h3>
        <SignUpForm onSubmit={onSubmit} />
      </Content>
    </Container>
  );
};

export default SignUp;