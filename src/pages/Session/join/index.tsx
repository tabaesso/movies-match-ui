import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Content } from '../../../components/styles';
import JoinSessionForm, { JoinSessionValues } from '../../../components/Forms/JoinSessionForm';

const JoinSession = () => {
  const navigate = useNavigate();

  const handleSubmit = React.useCallback((values: JoinSessionValues) => {
    const [,sessionId] = values.url.split('session/');

    navigate(`/session/${sessionId}`);
  }, [navigate]);

  return (
    <Container>
      <Link to='/home'>Voltar</Link>
      <Content>
        <JoinSessionForm onSubmit={handleSubmit} />
      </Content>
    </Container>
  );
};

export default JoinSession;