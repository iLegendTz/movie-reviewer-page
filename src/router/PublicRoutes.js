import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ActivateAccount } from '../pages/activate-account/ActivateAccount';
import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { Search } from '../pages/search/Search';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/activate-account" element={<ActivateAccount />} />
      <Route path="/search" element={<Search />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
