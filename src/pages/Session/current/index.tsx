import React from 'react';
import { useParams } from 'react-router-dom';
import { Mode } from './enum/modes';
import { Modes } from './types/modes';
import MovieGenres from './components/MovieGenres';
import MovieVotes from './components/MovieVotes';

const CurrentSession = () => {
  const { id } = useParams();
  const [mode, setMode] = React.useState<Mode>(Mode.MOVIE_GENRE_SELECTION);

  const onChangeMode = (newMode: Mode) => {
    if (newMode === mode) return;
    
    setMode(newMode);
  };
  
  const modes: Modes = {
    [Mode.MOVIE_GENRE_SELECTION]: <MovieGenres sessionId={id} onChangeMode={onChangeMode} />,
    [Mode.MOVIE_SELECTION]: <MovieVotes sessionId={id} onChangeMode={onChangeMode} />,
    [Mode.STREAM_SELECTION]: <></>,
  };

  return (
    <>
      {modes[mode]}
    </>
  );
};

export default CurrentSession;