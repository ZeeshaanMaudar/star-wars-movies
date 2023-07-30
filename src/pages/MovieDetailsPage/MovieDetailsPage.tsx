import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  Typography
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchSingleMovieDetailsStartAsync } from '../../redux/movies/moviesActions';
import { selectIsLoading, selectMovieDetails, selectError } from '../../redux/movies/moviesSelectors';

import { ListSection } from '../../components/ListSection';

import { PaperWrapper, Header } from './styles';

export const MovieDetailsPage = () => {
  const params = useParams();

  const loading = useAppSelector(selectIsLoading);
  const movieDetails = useAppSelector(selectMovieDetails);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleMovieDetailsStartAsync(Number(params.movieId)));
  }, [dispatch])

  return (
    <PaperWrapper>
      <Link to="/">Back</Link>
      <Header>
        <Typography variant='h4'>{movieDetails?.title}</Typography>
        <Typography>Director: {movieDetails?.director}</Typography>
        <Typography>Producer: {movieDetails?.producer}</Typography>
      </Header>
      <div>
        <Typography variant='h6'>Description</Typography>
        <p>{movieDetails?.description}</p>
      </div>
      <ListSection label="Characters" list={movieDetails?.characters} />
      <ListSection label="Planets" list={movieDetails?.planets} />
      <ListSection label="Species" list={movieDetails?.species} />
    </PaperWrapper>
  );
};
