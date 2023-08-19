import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Content } from '../../../components/styles';
import CheckboxList from '../../../components/CheckboxList';
import Button from '../../../components/Button';
import { CheckboxContainer } from './styles';

const CurrentSession = () => {
  const { id } = useParams();
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
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>([]);

  const handleGenreToggle = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <Container>
      <Link to='/home'>Voltar</Link>
      <Content>
        <h3>Selecione o gênero do que deseja assistir</h3>
        <CheckboxContainer>
          <CheckboxList
            values={genres}
            selectedValues={selectedGenres}
            onSelectToggle={handleGenreToggle}
          />
        </CheckboxContainer>
        <Button buttonType='primary'>Combinar filmes</Button>
      </Content>
    </Container>
  );
};

export default CurrentSession;