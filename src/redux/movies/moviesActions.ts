import axios from 'axios';

import * as actionTypes from './moviesActionTypes';

import { BASE_URL } from './constants';
import { Movie } from './types';

export interface MoviesType {
  moviesList: Movie[]
}

// fetch list of movies
export const fetchMoviesListRequest = () => ({
  type: actionTypes.FETCH_MOVIES_LIST_REQUEST,
});
  
export const fetchMoviesListSuccess = ({ moviesList }: MoviesType) => ({
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
        dispatch(fetchMoviesListSuccess({ moviesList: transformMovies(response.data.results) }));
      })
      .catch(error => {
        dispatch(fetchMoviesListFailure(error.message));
      })
  }
};

const transformMovies = (moviesList: any[]) => {
  return moviesList.map((movie) => ({
    id: movie.episode_id as number,
    title: movie.title as string,
    url: movie.url as string,
    director: movie.director as string,
    description: movie.opening_crawl as string,
    releaseDate: movie.release_date as string,
  }))
};
