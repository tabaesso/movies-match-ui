import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/home',
    element: <div>aaa</div>,
  }
]);