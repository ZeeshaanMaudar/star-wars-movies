import React, { useEffect } from 'react';

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMoviesListStartAsync } from '../../redux/movies/moviesActions';
import { selectIsFetchingMovies, selectMoviesList, selectError } from '../../redux/movies/moviesSelectors';
import { Movie } from '../../redux/movies/types';

export const MoviesPage = () => {

  const loading = useAppSelector(selectIsFetchingMovies);
  const moviesList = useAppSelector(selectMoviesList);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesListStartAsync());
  }, [dispatch])

  console.log('contents 111: ', moviesList);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Episode Number</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Release Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moviesList.map((movie: Movie) => (
            <TableRow
              key={movie.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {movie.title}
              </TableCell>
              <TableCell align="right">{movie.id}</TableCell>
              <TableCell>{movie.description}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>{movie.releaseDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

