import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Content } from '../../../../../components/styles';
import CheckboxList from '../../../../../components/CheckboxList';
import Button from '../../../../../components/Button';
import { CheckboxContainer } from '../../styles';
import { MovieGenresProps } from '../../types/modes';
import { Mode } from '../../enum/modes';

const MovieGenres = ({ sessionId, onChangeMode }: MovieGenresProps) => {
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>([]);

  const handleGenreToggle = React.useCallback((genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  }, [selectedGenres]);

  const onSubmit = React.useCallback(() => {
    // todo: fetch selected genres
    console.log(sessionId);
    onChangeMode(Mode.MOVIE_SELECTION);
  }, [onChangeMode, sessionId]);

  const genres = [
    'Ação',
    'Animação',
    'Aventura',
    'Comédia',
    'Crime',
    'Documentário',
    'Drama',
    'Fantasia',
    'Ficção Científica',
    'Musical',
    'Romance',
    'Suspense',
    'Terror',
    'Western',
  ];

  return (
    <Container>
      <Button buttonType='secondary' onClick={() => navigate('/home')}>Sair</Button>
      <Content>
        <h3>Selecione o gênero do que deseja assistir</h3>
        <CheckboxContainer>
          <CheckboxList
            values={genres}
            selectedValues={selectedGenres}
            onSelectToggle={handleGenreToggle}
          />
        </CheckboxContainer>
        <Button buttonType='primary' onClick={onSubmit}>Combinar filmes</Button>
      </Content>
    </Container>
  );
};

export default MovieGenres;