import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Suspense>
  );
};
