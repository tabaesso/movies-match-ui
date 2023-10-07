import React from 'react';
import Image from '../Image';
import { Movie } from '../../services/types/Movie';
import { getMovieTitle } from '../../hooks/useMovieTItle';
import { GridContainer, MovieCard, MovieItem, MovieTitle, MovieVote } from './styles';

export interface Vote {
  movieId: number | undefined;
  votes: number;
}

interface MovieGridProps {
  movies: Movie[];
  votes: Vote[];
  votedMovie: number | undefined;
  onVote: (movieId: number) => void;
}

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
          <MovieCard
            disabled={!!votedMovie}
            selected={votedMovie === movie.id}
            onClick={() => !votedMovie && onVote(movie.id)}
          >
            <Image src={movie.poster_path ? `${import.meta.env.VITE_TMDB_IMAGE_URL}${movie.poster_path}` : undefined} alt={getMovieTitle(movie) || undefined} />
            <MovieTitle>{getMovieTitle(movie)}</MovieTitle>
          </MovieCard>
        </MovieItem>
      );})}
  </GridContainer>
);

export default MovieGrid;
