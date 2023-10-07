import React, { useContext } from 'react';
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
import _ from 'lodash';
import { CoordinatorContext } from '../CoordinatorContext';
import { EventTypes } from '../../../../../enums/EventTypes';
import { Movies } from '../../../../../services/types/Movie';

const MovieGenres = ({ session, onChangeMode }: MovieGenresProps) => {
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>([]);
  const [waitingForOthers, setWaitingForOthers] = React.useState(false);

  const { sendMessage, receivedData, setMovies } = useContext(CoordinatorContext);

  const { isLoading, error, data } = useQuery<Genres>(['genres'], () =>
    api.get(
    `/movies/genres?mediaType=${session?.category}`
    ).then((res) => res.data), { enabled: !!session }
  );

  React.useEffect(() => {
    if (!error) return;

    toast.error('Erro ao carregar gêneros do título escolhido');
  }, [error]);

  React.useEffect(() => {
    if (!receivedData) return;

    if (receivedData.event !== EventTypes.SORT_MOVIES_EVENT) return;

    setWaitingForOthers(false);
    setMovies(receivedData.data as Movies);
    onChangeMode(Mode.MOVIE_SELECTION);
  }, [onChangeMode, receivedData, setMovies]);

  const handleSortMovies = React.useCallback((genres: number[]) => {
    if (!session?.id || !genres.length) return;

    sendMessage(EventTypes.SORT_MOVIES_EVENT, { sessionId: session?.id, genres });
    setWaitingForOthers(true);
  }, [sendMessage, session?.id]);

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

    handleSortMovies(genres);
  }, [data?.genres, handleSortMovies, selectedGenres, session]);

  const movieGenres = React.useMemo(() => data?.genres.map((genre) => genre.name) || [], [data]);

  return (
    <Container>
      <LoadingOverlay
        isLoading={isLoading || waitingForOthers}
        message={waitingForOthers ? 'Aguardando os demais usuários...' : undefined}
      />
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