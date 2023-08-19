import React from 'react';
import styled from 'styled-components';

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

interface Vote {
  movieId: number | undefined;
  votes: number;
}

interface MovieGridProps {
  movies: Movie[];
  votes: Vote[];
  votedMovie: number | undefined;
  onVote: (movieId: number) => void;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
`;

const MovieVote = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieCard = styled.button<{selected: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: 8px;
  padding: 5px;
  transition: transform 0.2s, box-shadow 0.2s;

  ${(props) => props.selected && `
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  `}

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`;

const MovieImage = styled.img`
  max-width: 100%;
  height: 150px; /* Altura fixa para as imagens */
  object-fit: cover; /* Para preencher o espaço mantendo a proporção */
`;

const MovieTitle = styled.span`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`;

const MovieGrid: React.FC<MovieGridProps> = ({
  movies,
  votes,
  votedMovie,
  onVote,
}) => (
  <GridContainer>
    {movies.map((movie, index) => {
      const movieVotes = votes.find((vote) => vote.movieId === movie.id);
      const vote = movieVotes?.votes && movieVotes?.votes > 0 ? `Votos: ${movieVotes?.votes}` : 'Sem votos';

      return (
        <MovieItem key={index}>
          <MovieVote>
            {vote}
          </MovieVote>
          <MovieCard selected={votedMovie === movie.id} onClick={() => onVote(movie.id)}>
            <MovieImage src={movie.imageUrl} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieCard>
        </MovieItem>
      );})}
  </GridContainer>
);

export default MovieGrid;
