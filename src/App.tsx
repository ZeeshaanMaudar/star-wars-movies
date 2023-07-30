import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MoviesPage } from './pages/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
