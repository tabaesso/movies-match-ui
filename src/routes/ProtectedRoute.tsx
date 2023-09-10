import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FunctionalComponent } from '../interfaces/FunctionalComponent';

export const ProtectedRoute: FunctionalComponent = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};