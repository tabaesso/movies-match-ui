import React from 'react';
import { useParams } from 'react-router-dom';
import { Mode } from './enum/modes';
import { Modes } from './types/modes';
import MovieGenres from './components/MovieGenres';
import MovieVotes from './components/MovieVotes';
import MovieStreamings from './components/MovieStreamings';

const CurrentSession = () => {
  const { id } = useParams();
  const [mode, setMode] = React.useState<Mode>(Mode.MOVIE_GENRE_SELECTION);

  const onChangeMode = (newMode: Mode) => {
    if (newMode === mode) return;
    
    setMode(newMode);
  };

  // TODO:
  // TELA FILME ESCOLHIDO
  // TELA CADASTRO USUÁRIO
  // TELA AVALIAR FILMES/SÉRIES ASSISTIDOS
  // TELA RANKING DA PLATAFORMA
  // TELA RECUPERAR SENHA
  
  const modes: Modes = {
    [Mode.MOVIE_GENRE_SELECTION]: <MovieGenres sessionId={id} onChangeMode={onChangeMode} />,
    [Mode.MOVIE_SELECTION]: <MovieVotes sessionId={id} onChangeMode={onChangeMode} />,
    [Mode.STREAM_SELECTION]: <MovieStreamings sessionId={id} />,
  };

  return (
    <>
      {modes[mode]}
    </>
  );
};

export default CurrentSession;