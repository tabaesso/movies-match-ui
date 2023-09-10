import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';
import { FunctionalComponent } from '../interfaces/FunctionalComponent';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: FunctionalComponent = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@MoviesMatch:token');
    const user = localStorage.getItem('@MoviesMatch:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('auth/login', {
      email,
      password,
    });

    const { access_token: token, user } = response.data;

    localStorage.setItem('@MoviesMatch:token', token);
    localStorage.setItem('@MoviesMatch:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@MoviesMatch:token');
    localStorage.removeItem('@MoviesMatch:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };