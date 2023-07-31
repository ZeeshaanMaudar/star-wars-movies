import React, { useState, useEffect } from 'react';

import {
  Alert,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMoviesListStartAsync } from '../../redux/movies/moviesActions';
import { selectIsLoading, selectMoviesList, selectError } from '../../redux/movies/moviesSelectors';

import { sortArrayByDirectionAndProperty } from '../../shared/helpers/sortArrayByDirectionAndProperty';
import { Movie, Order } from '../../shared/types';
import { SortProperty } from './types';

import { Spinner } from '../../components/Spinner';
import { CollapsibleRow } from '../../components/CollapsibleRow';

export const MoviesPage = () => {

  const loading = useAppSelector(selectIsLoading);
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

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return (
      <Alert severity="error" color="error">
				{error}
			</Alert>
    );
  }
   
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
            <TableCell />
            <TableCell onClick={() => handleSortRequest(SortProperty.TITLE)}>  
              <TableSortLabel active={orderBy === SortProperty.TITLE} direction={orderDirection}>Title</TableSortLabel>
            </TableCell>
            <TableCell align="center" onClick={() => handleSortRequest(SortProperty.EPISODE_ID)}>
              <TableSortLabel active={orderBy === SortProperty.EPISODE_ID} direction={orderDirection}>Episode Number</TableSortLabel>
            </TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Release Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((movie: Movie) => (
            <CollapsibleRow key={movie.movieId} movie={movie} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

