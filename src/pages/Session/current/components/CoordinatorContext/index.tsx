import React, { createContext } from 'react';
import { Session } from '../../../../../services/types/Session';
import { FunctionalComponent } from '../../../../../interfaces/FunctionalComponent';
import { useQuery } from '@tanstack/react-query';
import api from '../../../../../services/api';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import useSocket, { SocketData } from '../../../../../hooks/useSocket';
import { EventTypes } from '../../../../../enums/EventTypes';
import { Movies } from '../../../../../services/types/Movie';

interface CoordinatorProviderProps {
  session?: Session;
  isLoading: boolean;
  isFetching: boolean;
  error?: unknown;
  socket: WebSocket | null;
  sendMessage: <T>(event: EventTypes, data: T) => void;
  receivedData: SocketData | null;
  refetch: () => void;
  movies?: Movies;
  setMovies: (movies: Movies) => void;
}

const defaultValue = {
  session: undefined,
  isLoading: false,
  isFetching: false,
  error: undefined,
  socket: null,
  sendMessage: () => {},
  receivedData: null,
  refetch: () => {},
  movies: undefined,
  setMovies: () => {},
};

const CoordinatorContext = createContext<CoordinatorProviderProps>(defaultValue);

const CoordinatorProvider: FunctionalComponent = ({ children }) => {
  const { id } = useParams();
  const { user } = useAuth();

  const [movies, setMovies] = React.useState<Movies>();

  const { isLoading, error, data, isFetching, refetch } = useQuery<Session>(['currentSession'], () =>
    api.get(
      `/sessions/${id}`
    ).then((res) => res.data)
  );

  const { socket, sendMessage, receivedData } = useSocket({ sessionId: id || '', userId: user.id });

  const handleSetMovies = (currentMovies: Movies) => {
    setMovies(currentMovies);
  };

  return (
    <CoordinatorContext.Provider
      value={{
        session: data,
        isLoading,
        isFetching,
        error,
        socket,
        sendMessage,
        receivedData,
        refetch,
        movies,
        setMovies: handleSetMovies,
      }}
    >
      {children}
    </CoordinatorContext.Provider>
  );
};

export { CoordinatorProvider, CoordinatorContext };