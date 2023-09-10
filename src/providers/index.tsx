import React from 'react';

import { AuthProvider } from './auth';
import 'react-toastify/dist/ReactToastify.css';
import { FunctionalComponent } from '../interfaces/FunctionalComponent';

const AppProvider: FunctionalComponent = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

export default AppProvider;
