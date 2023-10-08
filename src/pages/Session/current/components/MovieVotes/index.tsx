import React, { useContext } from 'react';
import { MovieVotesProps } from '../../types/modes';
import { Container, Content } from '../../../../../components/styles';
import MovieGrid, { Vote } from '../../../../../components/MovieGrid';
import { Mode } from '../../enum/modes';
import { CoordinatorContext } from '../CoordinatorContext';
import { EventTypes } from '../../../../../enums/EventTypes';

const MovieVotes = ({ session, onChangeMode }: MovieVotesProps) => {
  const { sendMessage, receivedData, refetch, movies } = useContext(CoordinatorContext);

  const [votedMovie, setMovieVote] = React.useState<number | undefined>(undefined);
  const [votes, setVotes] = React.useState<Vote[]>([]);

  React.useEffect(() => {
    if (!receivedData) return;

    if (receivedData.event !== EventTypes.VOTED_MOVIE_EVENT) return;

    setVotes(receivedData.data as Vote[]);
  }, [onChangeMode, receivedData]);

  React.useEffect(() => {
    if (!receivedData) return;

    if (receivedData.event !== EventTypes.CHOSEN_MOVIE_EVENT) return;

    refetch();
    onChangeMode(Mode.STREAM_SELECTION);
  }, [onChangeMode, receivedData, refetch]);

  // const neitherOfThem = React.useMemo(() => {
  //   const vote = votes.find((vote) => vote.movieId === undefined);

  //   return vote?.votes && vote?.votes > 0 ? `Votos: ${vote?.votes}` : 'Sem votos';
  // }, [votes]);

  const handleVoteMovie = React.useCallback((movieId: number) => {
    if (!session?.id || !movieId) return;

    setMovieVote(movieId);
    sendMessage(EventTypes.VOTED_MOVIE_EVENT, { sessionId: session?.id, movieId });
  }, [sendMessage, session?.id]);

  return (
    <Container>
      <Content>
        <h3>Selecione qual deseja assistir</h3>
        <MovieGrid
          movies={movies?.results || []}
          votes={votes}
          votedMovie={votedMovie}
          onVote={(movieId: number) => handleVoteMovie(movieId)}
        />
        {/* <Button buttontype='secondary'>
          Não gostei de nenhum - {neitherOfThem}
        </Button> */}
        {/* <Button buttontype='primary' onClick={() => onChangeMode(Mode.WAITING_APPROVAL)}>
          Escolhido
        </Button> */}
      </Content>
    </Container>
  );
};

export default MovieVotes;