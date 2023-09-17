import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from '../../../../../components/styles';
import CheckboxList from '../../../../../components/CheckboxList';
import Button from '../../../../../components/Button';
import { CheckboxContainer } from '../../styles';
import { MovieGenresProps } from '../../types/modes';
import { Mode } from '../../enum/modes';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import LoadingOverlay from '../../../../../components/LoadingOverlay';
import api from '../../../../../services/api';
import { Genres } from '../../../../../services/types/Genres';
import _ from 'lodash';

interface SessionGenresValues {
  genres: number[];
  sessionId: string;
}

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

  const mutation = useMutation({
    mutationFn: (sessionGenres: SessionGenresValues) => {
      return api.patch(`/sessions/${sessionGenres.sessionId}`, {
        genres: sessionGenres.genres,
      });
    },
    onSuccess: () => {
      onChangeMode(Mode.MOVIE_SELECTION);
    },
    onError: () => {
      toast.error('Erro ao selecionar gêneros');
    },
  });

  const handleGenreToggle = React.useCallback((genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  }, [selectedGenres]);

  const onSubmit = React.useCallback(() => {
    if (!session) return;

    const genres = _.compact(selectedGenres.map((genre) => data?.genres.find((g) => g.name === genre)?.id || undefined));
    const sessionGenres = session?.genres || [];
    const mergedGenres = _.uniq([...genres, ...sessionGenres]);

    mutation.mutate({
      genres: mergedGenres,
      sessionId: session?.id || '',
    });
  }, [data?.genres, mutation, selectedGenres, session]);

  const movieGenres = React.useMemo(() => data?.genres.map((genre) => genre.name) || [], [data]);

  return (
    <Container>
      <LoadingOverlay isLoading={isLoading || isFetching || mutation.isLoading} />
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