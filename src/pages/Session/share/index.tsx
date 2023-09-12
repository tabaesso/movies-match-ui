import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { Container, Content } from '../../../components/styles';

const ShareSession = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const handleAccessSession = () => {
    navigate(`/session/${id}`);
  };

  // TODO: get session by id

  return (
    <Container>
      <Link to='/home'>Voltar</Link>
      <Content>
        <>
          <h3>Compartilhe o link com seus amigos!</h3>
          <input type="text" value={`https://tabaesso.com/session/${id}`} readOnly />
          <h4>Entraram na {id}:</h4>
          <ul>
            <li>Usuário 1</li>
            <li>Usuário 2</li>
            <li>Usuário 3</li>
          </ul>
          <Button buttonType='primary' onClick={handleAccessSession}>Começar!</Button>
        </>
      </Content>
    </Container>
  );
};

export default ShareSession;