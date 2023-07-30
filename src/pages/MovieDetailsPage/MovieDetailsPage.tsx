import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  Alert,
  Typography
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchSingleMovieDetailsStartAsync } from '../../redux/movies/moviesActions';
import { selectIsLoading, selectMovieDetails, selectError } from '../../redux/movies/moviesSelectors';

import { Spinner } from '../../components/Spinner';
import { ListSection } from '../../components/ListSection';

import { PaperWrapper, Header, DescriptionWrapper } from './styles';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const loading = useAppSelector(selectIsLoading);
  const movieDetails = useAppSelector(selectMovieDetails);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleMovieDetailsStartAsync(Number(movieId)));
  }, [dispatch, movieId])

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

  return (
    <PaperWrapper>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography>Back</Typography>
      </Link>
      <Header>
        <Typography variant='h4'>{movieDetails?.title}</Typography>
        <Typography>Director: {movieDetails?.director}</Typography>
        <Typography>Producer: {movieDetails?.producer}</Typography>
      </Header>
      <DescriptionWrapper>
        <Typography variant='h6'>Description</Typography>
        <Typography>{movieDetails?.description}</Typography>
      </DescriptionWrapper>
      <ListSection label="Characters" list={movieDetails?.characters} />
      <ListSection label="Planets" list={movieDetails?.planets} />
      <ListSection label="Species" list={movieDetails?.species} />
    </PaperWrapper>
  );
};
