import React from 'react';

import { AuthProvider } from './auth';
import 'react-toastify/dist/ReactToastify.css';
import { FunctionalComponent } from '../interfaces/FunctionalComponent';
import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

const AppProvider: FunctionalComponent = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <>
          {children}
          <ToastContainer />
        </>
      </QueryClientProvider>
    </AuthProvider>
  );};

export default AppProvider;
