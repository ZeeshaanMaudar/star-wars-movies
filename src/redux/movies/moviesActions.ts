import axios from 'axios';

import * as actionTypes from './moviesActionTypes';

import { BASE_URL } from './constants';
import { Movie, MovieDetails } from '../../shared/types';
import { transformMovies } from '../../shared/helpers/transformMovies';

// fetch list of movies
export const fetchMoviesListRequest = () => ({
  type: actionTypes.FETCH_MOVIES_LIST_REQUEST,
});
  
export const fetchMoviesListSuccess = (moviesList: Movie[]) => ({
  type: actionTypes.FETCH_MOVIES_LIST_SUCCESS,
  payload: { moviesList }
});

export const fetchMoviesListFailure = (error: string) => ({
  type: actionTypes.FETCH_MOVIES_LIST_FAILURE,
  payload: error
});
  
export const fetchMoviesListStartAsync = () => {

  return (dispatch: any) => {

    dispatch(fetchMoviesListRequest());

    axios.get(BASE_URL)
      .then(response => {
        dispatch(fetchMoviesListSuccess(transformMovies(response.data.results)));
      })
      .catch(error => {
        dispatch(fetchMoviesListFailure(error.message));
      })
  }
};

// fetch single movie details
export const fetchSingleMovieDetailsRequest = () => ({
  type: actionTypes.FETCH_SINGLE_MOVIE_DETAILS_REQUEST,
});

export const fetchSingleMovieDetailsSuccess = (movieDetails: MovieDetails) => ({
  type: actionTypes.FETCH_SINGLE_MOVIE_DETAILS_SUCCESS,
  payload: { movieDetails }
});

export const fetchSingleMovieDetailsFailure = (error: string) => ({
  type: actionTypes.FETCH_SINGLE_MOVIE_DETAILS_FAILURE,
  payload: error
});

export const fetchSingleMovieDetailsStartAsync = (movieId: number) => {

  return (dispatch: any) => {

    dispatch(fetchSingleMovieDetailsRequest());

    axios.get(`${BASE_URL}/${movieId}`)
      .then(async (response) => {
        const movieDetailsWithUrls = response.data;

        const responseCharacters = movieDetailsWithUrls.characters.map((url: string) =>
          axios.get(url)
            .then((response) => response.data.name)
        );

        const responsePlanets = movieDetailsWithUrls.planets.map((url: string) =>
          axios.get(url)
            .then((response) => response.data.name)
        );

        const responseSpecies = movieDetailsWithUrls.species.map((url: string) =>
          axios.get(url)
            .then((response) => response.data.name)
        );

        const characters = await Promise.all(responseCharacters);
        const planets = await Promise.all(responsePlanets);
        const species = await Promise.all(responseSpecies);


        const movieDetails = {
          title: movieDetailsWithUrls.title,
          episodeId: movieDetailsWithUrls.episode_id,
          description: movieDetailsWithUrls.opening_crawl,
          director: movieDetailsWithUrls.director,
          producer: movieDetailsWithUrls.producer,
          releaseDate: movieDetailsWithUrls.release_date,
          characters,
          planets,
          species,
        };

        dispatch(fetchSingleMovieDetailsSuccess(movieDetails));
      })
      .catch(error => {
        dispatch(fetchSingleMovieDetailsFailure(error.message));
      })
  }
};
