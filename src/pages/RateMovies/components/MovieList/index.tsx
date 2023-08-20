import React from 'react';
import { MovieContainer, MovieTitle } from './styles';
import StarRating from '../../../../components/StarRating';

interface Movie {
  id: number;
  title: string;
  rated?: number;
}

interface MovieListProps {
  movies: Movie[];
  disabled?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, disabled = false }) => {
  const handleRatingChange = (movieId: number, rating: number) => {
    // Lógica para atualizar a avaliação do filme com ID movieId para a nova avaliação rating
    console.log(`Filme ${movieId} avaliado com ${rating} estrelas`);
  };

  return (
    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
      {movies.map((movie) => (
        <MovieContainer key={movie.id}>
          <MovieTitle>{movie.title}</MovieTitle>
          <StarRating rated={movie.rated} disabled={disabled} onChange={(rating) => handleRatingChange(movie.id, rating)} />
        </MovieContainer>
      ))}
    </div>
  );
};

export default MovieList;
