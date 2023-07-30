import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMoviesListStartAsync } from '../../redux/movies/moviesActions';
import { selectIsFetchingMovies, selectMoviesList, selectError } from '../../redux/movies/moviesSelectors';

import { sortArrayByDirectionAndProperty } from '../../shared/helpers/sortArrayByDirectionAndProperty';
import { Movie, Order } from '../../shared/types';
import { SortProperty } from './types';

export const MoviesPage = () => {

  const loading = useAppSelector(selectIsFetchingMovies);
  const moviesList = useAppSelector(selectMoviesList);
  const error = useAppSelector(selectError);

  const [rowData, setRowData] = useState<Movie[]>(moviesList);
  const [orderDirection, setOrderDirection] = useState<Order>(Order.ASC);
  const [orderBy, setOrderBy] = useState('title');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesListStartAsync());
  }, [dispatch])

  useEffect(() => {
    setRowData(moviesList);
  }, [moviesList])
   
  const handleSortRequest = (
    property: keyof Movie,
    ) => {
    setRowData(sortArrayByDirectionAndProperty(moviesList, orderDirection, property));
    setOrderDirection(orderDirection === Order.ASC ? Order.DESC : Order.ASC);
    setOrderBy(property);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSortRequest(SortProperty.TITLE)}>  
              <TableSortLabel active={orderBy === SortProperty.TITLE} direction={orderDirection}>Title</TableSortLabel>
            </TableCell>
            <TableCell align="right" onClick={() => handleSortRequest(SortProperty.EPISODE_ID)}>
              <TableSortLabel active={orderBy === SortProperty.EPISODE_ID} direction={orderDirection}>Episode Number</TableSortLabel>
            </TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Release Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((movie: Movie) => (
            <TableRow
              key={movie.movieId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Link to={`/${movie.movieId}`}>
                <TableCell component="th" scope="row">
                  {movie.title}
                </TableCell>
              </Link>
              <TableCell align="right">{movie.episodeId}</TableCell>
              <TableCell>{movie.description}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>{new Date(movie.releaseDate).toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

