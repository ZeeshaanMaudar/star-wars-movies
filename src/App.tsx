import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MoviesPage } from './pages/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { ErrorPage } from './pages/ErrorPage';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
