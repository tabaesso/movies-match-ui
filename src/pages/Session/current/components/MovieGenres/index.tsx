import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from '../../../../../components/styles';
import CheckboxList from '../../../../../components/CheckboxList';
import Button from '../../../../../components/Button';
import { CheckboxContainer } from '../../styles';
import { MovieGenresProps } from '../../types/modes';
import { Mode } from '../../enum/modes';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import LoadingOverlay from '../../../../../components/LoadingOverlay';
import api from '../../../../../services/api';
import { Genres } from '../../../../../services/types/Genres';

const MovieGenres = ({ session, onChangeMode }: MovieGenresProps) => {
  const { isLoading, error, data, isFetching } = useQuery<Genres>(['genres'], () =>
    api.get(
      `/movies/genres?mediaType=${session?.category}`
    ).then((res) => res.data), { enabled: !!session }
  );

  React.useEffect(() => {
    if (!error) return;

    toast.error('Erro ao carregar sessão atual');
  }, [error]);

  const [selectedGenres, setSelectedGenres] = React.useState<string[]>([]);

  const handleGenreToggle = React.useCallback((genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  }, [selectedGenres]);

  const onSubmit = React.useCallback(() => {
    // todo: send selected genres to backend
    onChangeMode(Mode.MOVIE_SELECTION);
  }, [onChangeMode]);

  const movieGenres = React.useMemo(() => data?.genres.map((genre) => genre.name) || [], [data]);

  return (
    <Container>
      <LoadingOverlay isLoading={isLoading || isFetching} />
      <Link to='/home'>Sair</Link>
      <Content>
        <h3>Selecione o gênero do que deseja assistir</h3>
        <CheckboxContainer>
          <CheckboxList
            values={movieGenres || []}
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