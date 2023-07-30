import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  Paper
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchSingleMovieDetailsStartAsync } from '../../redux/movies/moviesActions';
import { selectIsLoading, selectMovieDetails, selectError } from '../../redux/movies/moviesSelectors';

import { ListSection } from '../../components/ListSection';

export const MovieDetailsPage = () => {
  const params = useParams();

  const loading = useAppSelector(selectIsLoading);
  const movieDetails = useAppSelector(selectMovieDetails);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleMovieDetailsStartAsync(Number(params.movieId)));
  }, [dispatch])

  console.log('params 333: ', params);
  console.log('movieDetails 333: ', movieDetails);
  return (
    <Paper>
      <Link to="/">Back</Link>
      <div>
        <div>{movieDetails?.title}</div>
        <div>Director: {movieDetails?.director}</div>
        <div>Producer: {movieDetails?.producer}</div>
      </div>
      <div>
        <h4>Description</h4>
        <p>{movieDetails?.description}</p>
      </div>
      <ListSection label="Characters" list={movieDetails?.characters} />
      <ListSection label="Planets" list={movieDetails?.planets} />
      <ListSection label="Species" list={movieDetails?.species} />
    </Paper>
  );
};
