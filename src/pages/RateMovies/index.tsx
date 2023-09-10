import React from 'react';
import MovieList from './components/MovieList';
import { movies } from '../../utils/mock/movies';
import { Container, Content, JustifyRow } from '../../components/styles';
import Button from '../../components/Button';
import { RateContainer } from './styles';
import { useNavigate } from 'react-router-dom';

const RateMovies = () => {
  const ratedMovies = movies.map((movie) => ({ ...movie, rated: 4 }));
  const navigate = useNavigate();

  return (
    <Container>
      <RateContainer>
        <Content>
          <h4>Títulos a serem avaliados:</h4>
          <MovieList movies={[...movies, ...movies]} />
        </Content>
        <Content>
          <h4>Títulos já avaliados:</h4>
          <MovieList disabled movies={ratedMovies} />
        </Content>
      
      </RateContainer>
      <JustifyRow>
        <Button buttonType='secondary' onClick={() => navigate('/home')}>Voltar</Button>
        <Button buttonType='primary'>Salvar</Button>
      </JustifyRow>
    </Container>
  );
};

export default RateMovies;