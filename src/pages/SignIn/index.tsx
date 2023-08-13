import React, { useCallback } from 'react';
import { Container, Content } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';

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
      </Content>
    </Container>
  );
};

export default SignIn;