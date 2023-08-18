import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import CreateSessionForm, { CreateSessionObject } from '../../../components/Forms/CreateSessionForm';
import Input from '../../../components/Input';
import { Container, Content } from '../../../components/styles';

const CreateSession = () => {
  const [createdSession, setCreateSession] = React.useState<CreateSessionObject | undefined>(undefined);
  const navigate = useNavigate();

  const handleSubmit = (values: CreateSessionObject) => {
    setCreateSession(values);
  };

  const handleAccessSession = () => {
    navigate(`/session/${createdSession?.name}`);
  };

  return (
    <Container>
      <Link to='/home'>Voltar</Link>
      <Content>
        {!createdSession && (
          <CreateSessionForm onSubmit={handleSubmit} />
        )}
        {createdSession && (
          <>
            <h3>Compartilhe o link com seus amigos!</h3>
            <Input type="text" value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" readOnly />
            <h4>Entraram na {createdSession?.name}:</h4>
            <ul>
              <li>Usuário 1</li>
              <li>Usuário 2</li>
              <li>Usuário 3</li>
            </ul>
            <Button buttonType='primary' onClick={handleAccessSession}>Começar!</Button>
          </>
        )}
      </Content>
    </Container>
  );
};

export default CreateSession;