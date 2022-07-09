import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ActivateAccount } from '../pages/activate-account/ActivateAccount';

import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/activate-account" element={<ActivateAccount />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
