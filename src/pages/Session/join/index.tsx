import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from '../../../components/styles';
import JoinSessionForm, { JoinSessionValues } from '../../../components/Forms/JoinSessionForm';

const JoinSession = () => {
  const handleSubmit = React.useCallback((values: JoinSessionValues) => {
    window.location.href = values.url;
  }, []);

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