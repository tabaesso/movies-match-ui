import React, { createContext } from 'react';
import { Session } from '../../../../../services/types/Session';
import { FunctionalComponent } from '../../../../../interfaces/FunctionalComponent';
import { useQuery } from '@tanstack/react-query';
import api from '../../../../../services/api';
import { useParams } from 'react-router-dom';
// import { io } from 'socket.io-client';
// import useAuth from '../../../../../hooks/useAuth';

interface CoordinatorProviderProps {
  session?: Session;
  isLoading: boolean;
  isFetching: boolean;
  error?: unknown;
}

const defaultValue = {
  session: undefined,
  isLoading: false,
  isFetching: false,
  error: undefined,
};

const CoordinatorContext = createContext<CoordinatorProviderProps>(defaultValue);

const CoordinatorProvider: FunctionalComponent = ({ children }) => {
  const { id } = useParams();
  // const { user } = useAuth();

  const { isLoading, error, data, isFetching } = useQuery<Session>(['currentSession'], () =>
    api.get(
      `/sessions/${id}`
    ).then((res) => res.data)
  );

  // const socketURL = `${import.meta.env.VITE_API_URL}/?sessionId=${id}&userId=${user.id}`;

  // const socket = io(socketURL);

  // socket.on('connect', () => {
  //   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // });
  
  // socket.on('disconnect', () => {
  //   console.log(socket.id); // undefined
  // });  

  return (
    <CoordinatorContext.Provider
      value={{ session: data, isLoading, isFetching, error }}
    >
      {children}
    </CoordinatorContext.Provider>
  );
};

export { CoordinatorProvider, CoordinatorContext };