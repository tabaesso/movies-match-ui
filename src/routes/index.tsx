import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import RateMovies from '../pages/RateMovies';
import CreateSession from '../pages/Session/create';
import JoinSession from '../pages/Session/join';
import CurrentSession from '../pages/Session/current';
import { ProtectedRoute } from './ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/rate" element={<ProtectedRoute><RateMovies /></ProtectedRoute>} />
      <Route path="/create-session" element={<ProtectedRoute><CreateSession /></ProtectedRoute>} />
      <Route path="/join-session" element={<ProtectedRoute><JoinSession /></ProtectedRoute>} />
      <Route path="/session/:id" element={<ProtectedRoute><CurrentSession /></ProtectedRoute>} />
    </Routes>
  );
}