import React from 'react';
import { MovieVotesProps } from '../../types/modes';
import { Container, Content } from '../../../../../components/styles';
import MovieGrid from '../../../../../components/MovieGrid';
import Button from '../../../../../components/Button';
import { Mode } from '../../enum/modes';

const MovieVotes = ({ sessionId, onChangeMode }: MovieVotesProps) => {

  const movies = [
    {
      id: 1,
      title: 'Vingadores: Ultimato',
      imageUrl: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg',
    },
    {
      id: 2,
      title: 'O Rei Leão',
      imageUrl: 'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg',
    },
    {
      id: 3,
      title: 'Harry Potter e a Pedra Filosofal',
      imageUrl: 'https://musicart.xboxlive.com/7/93e05000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    },
    {
      id: 4,
      title: 'A Origem',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg',
    },
    {
      id: 5,
      title: 'Toy Story 4',
      imageUrl: 'https://br.web.img3.acsta.net/pictures/19/03/27/21/03/0464387.jpg',
    },
    {
      id: 6,
      title: 'Ponte para terabitia',
      imageUrl: 'https://br.web.img3.acsta.net/pictures/210/444/21044474_20130926180447162.jpg',
    },
  ];

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
        <Button buttonType='primary' onClick={() => onChangeMode(Mode.STREAM_SELECTION)}>
          Escolhido
        </Button>
      </Content>
    </Container>
  );
};

export default MovieVotes;