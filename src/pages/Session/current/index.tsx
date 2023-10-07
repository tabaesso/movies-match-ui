import React, { useContext } from 'react';
import { Mode } from './enum/modes';
import { Modes } from './types/modes';
import MovieGenres from './components/MovieGenres';
import MovieVotes from './components/MovieVotes';
import MovieStreamings from './components/MovieStreamings';
// import MovieSelected from './components/MovieSelected';
// import WaitingApproval from './components/WaitingApproval';
import LoadingOverlay from '../../../components/LoadingOverlay';
import { toast } from 'react-toastify';
import { CoordinatorContext } from './components/CoordinatorContext';

const CurrentSession = () => {
  const [mode, setMode] = React.useState<Mode>(Mode.MOVIE_GENRE_SELECTION);

  const { session, error, isLoading } = useContext(CoordinatorContext);

  React.useEffect(() => {
    if (!error) return;

    toast.error('Erro ao carregar sessão atual');
  }, [error]);

  const onChangeMode = (newMode: Mode) => {
    if (newMode === mode) return;
    
    setMode(newMode);
  };
  
  const modes: Modes = {
    [Mode.MOVIE_GENRE_SELECTION]: <MovieGenres session={session} onChangeMode={onChangeMode} />,
    [Mode.MOVIE_SELECTION]: <MovieVotes session={session} onChangeMode={onChangeMode} />,
    // [Mode.MOVIE_SELECTED]: <MovieSelected session={session} onChangeMode={onChangeMode} />,
    // [Mode.WAITING_APPROVAL]: <WaitingApproval session={session} onChangeMode={onChangeMode} />,
    [Mode.STREAM_SELECTION]: <MovieStreamings session={session} />,
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      {modes[mode]}
    </>
  );
};

export default CurrentSession;