import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import CreateSession from '../pages/Session/create';
import JoinSession from '../pages/Session/join';
import CurrentSession from '../pages/Session/current';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
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
  },
  {
    path: '/session/:id',
    element: <CurrentSession />
  }
]);