import React from 'react';
import { Container, Content, JustifyRow } from '../../components/styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = React.useCallback(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <Container>
      <Content>
        <h3>Criar conta</h3>
        <Input type='text' name="name" placeholder='Nome' />
        <Input type='email' name="mail" placeholder='E-mail' />
        <Input type='date' name="birthday" placeholder='Data de nascimento' />
        <Input type='password' name="password" placeholder='Senha' />
        <Input type='password' name="password-confirmation" placeholder='Confirme sua senha' />
        
        <JustifyRow>
          <Button flex={1} buttonType='secondary' onClick={() => navigate('/')}>Voltar</Button>
          <Button flex={1} buttonType='primary' onClick={onSubmit}>Criar</Button>
        </JustifyRow>
      </Content>
    </Container>
  );
};

export default SignUp;