import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Container, Content } from '../../../components/styles';

const JoinSession = () => {
  const [currentSession, setCurrentSession] = React.useState<string | undefined>(undefined);

  const handleSubmit = () => {
    alert(currentSession);
  };

  return (
    <Container>
      <Link to='/home'>Voltar</Link>
      <Content>
        <span>Insira o link da sessão</span>
        <Input type="text" placeholder='Link' value={currentSession} onChange={(e) => setCurrentSession(e.target.value)} />
        <Button buttonType='primary' onClick={handleSubmit}>Acessar</Button>
      </Content>
    </Container>
  );
};

export default JoinSession;