import React from 'react';
import { MovieVotesProps } from '../../types/modes';
import { Container, Content } from '../../../../../components/styles';
import MovieGrid from '../../../../../components/MovieGrid';
import Button from '../../../../../components/Button';
import { Mode } from '../../enum/modes';
import { movies } from '../../../../../utils/mock/movies';

const MovieVotes = ({ session, onChangeMode }: MovieVotesProps) => {
  console.log(session?.id);

  const [votedMovie, setMovieVote] = React.useState<number | undefined>(undefined);

  const votes = React.useMemo(() => [
    { movieId: 1, votes: 3 },
    { movieId: 3, votes: 2 },
    { movieId: undefined, votes: 0 },
  ], []);

  const neitherOfThem = React.useMemo(() => {
    const vote = votes.find((vote) => vote.movieId === undefined);

    return vote?.votes && vote?.votes > 0 ? `Votos: ${vote?.votes}` : 'Sem votos';
  }, [votes]);

  // TODO: movie selected page will appear just for the session owner, for the others will appear a loading screen

  return (
    <Container>
      <Content>
        <h3>Selecione qual deseja assistir</h3>
        <MovieGrid
          movies={movies}
          votes={votes}
          votedMovie={votedMovie}
          onVote={(movieId: number) => setMovieVote(movieId)}
        />
        <Button buttonType='secondary'>
          Não gostei de nenhum - {neitherOfThem}
        </Button>
        <Button buttonType='primary' onClick={() => onChangeMode(Mode.WAITING_APPROVAL)}>
          Escolhido
        </Button>
      </Content>
    </Container>
  );
};

export default MovieVotes;