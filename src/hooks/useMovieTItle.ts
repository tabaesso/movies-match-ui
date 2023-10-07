import React from 'react';
import { Movie } from '../services/types/Movie';

export const getMovieTitle = (movie?: Movie) => {
  const defaultText = 'Vish, não encontramos o título selecionado.';

  if (!movie) return defaultText;

  if (movie?.name || movie?.title) return movie?.name || movie?.title;

  return movie?.original_name || movie?.original_title;
};

const useMovieTitle = (movie?: Movie) => {
  return React.useMemo(() => getMovieTitle(movie), [movie]);
};

export default useMovieTitle;