import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MoviesPage } from './pages/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
