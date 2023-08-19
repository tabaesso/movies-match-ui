import React from 'react';
import { MovieStreamingsProps } from '../../types/modes';
import { Container, Content } from '../../../../../components/styles';
import Button from '../../../../../components/Button';
import { NotFound, Title } from './styles';
import { useNavigate } from 'react-router-dom';

const MovieStreamings = ({ sessionId }: MovieStreamingsProps) => {
  console.log(sessionId);
  const streamingServices = ['Disney+', 'Netflix', 'Amazon Prime Video', 'Telecine Play', 'Globoplay'];
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h4>
          Serviços de streaming que o título&nbsp;
          <Title>{'O Rei Leão'}</Title>
          &nbsp;está disponível:
        </h4>
        {streamingServices.length === 0 ? (
          <NotFound>Nenhum serviço de streaming disponível no Brasil para este título</NotFound>
        ) : (
          <ul>
            {streamingServices.map((service) => <li>{service}</li>)}
          </ul>
        )}
        <Button buttonType='primary' onClick={() => navigate('/home')}>Valeu!</Button>
      </Content>
    </Container>
  );
};

export default MovieStreamings;