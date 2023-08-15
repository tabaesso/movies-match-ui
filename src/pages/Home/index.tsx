import React from 'react';
import { Container, Content, SessionButton } from './styles';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <SessionButton onClick={() => navigate('/')}>
          <h2>Criar sessão</h2>
        </SessionButton>
        <SessionButton onClick={() => navigate('/')}>
          <h2>Entrar em uma sessão</h2>
        </SessionButton>
      </Content>
      <Content>
        <Link to='/'>Voltar</Link>
      </Content>
    </Container>
  );
};

export default Home;