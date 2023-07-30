import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchSingleMovieDetailsStartAsync } from '../../redux/movies/moviesActions';
import { selectIsLoading, selectMovieDetails, selectError } from '../../redux/movies/moviesSelectors';

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
  return <div>Movie Details Page</div>;
};
