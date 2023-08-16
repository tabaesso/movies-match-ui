import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import CreateSession from '../pages/Session/create';
import JoinSession from '../pages/Session/join';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/create-session',
    element: <CreateSession />,
  },
  {
    path: '/join-session',
    element: <JoinSession />,
  }
]);