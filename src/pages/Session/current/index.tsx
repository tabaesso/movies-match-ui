import React from 'react';
import { useParams } from 'react-router-dom';
import { Mode } from './enum/modes';
import { Modes } from './types/modes';
import MovieGenres from './components/MovieGenres';
import MovieVotes from './components/MovieVotes';
import MovieStreamings from './components/MovieStreamings';
import MovieSelected from './components/MovieSelected';
import WaitingApproval from './components/WaitingApproval';
import { useQuery } from '@tanstack/react-query';
import api from '../../../services/api';
import LoadingOverlay from '../../../components/LoadingOverlay';
import { toast } from 'react-toastify';
import { Session } from '../../../services/types/Session';

const CurrentSession = () => {
  const { id } = useParams();
  const [mode, setMode] = React.useState<Mode>(Mode.MOVIE_GENRE_SELECTION);

  const { isLoading, error, data, isFetching } = useQuery<Session>(['currentSession'], () =>
    api.get(
      `/sessions/${id}`
    ).then((res) => res.data)
  );

  React.useEffect(() => {
    if (!error) return;

    toast.error('Erro ao carregar sessão atual');
  }, [error]);

  const onChangeMode = (newMode: Mode) => {
    if (newMode === mode) return;
    
    setMode(newMode);
  };
  
  const modes: Modes = {
    [Mode.MOVIE_GENRE_SELECTION]: <MovieGenres session={data} onChangeMode={onChangeMode} />,
    [Mode.MOVIE_SELECTION]: <MovieVotes session={data} onChangeMode={onChangeMode} />,
    [Mode.MOVIE_SELECTED]: <MovieSelected session={data} onChangeMode={onChangeMode} />,
    [Mode.WAITING_APPROVAL]: <WaitingApproval session={data} onChangeMode={onChangeMode} />,
    [Mode.STREAM_SELECTION]: <MovieStreamings session={data} />,
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading || isFetching} />
      {modes[mode]}
    </>
  );
};

export default CurrentSession;