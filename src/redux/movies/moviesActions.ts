import axios from 'axios';

import * as actionTypes from './moviesActionTypes';

import { BASE_URL } from './constants';
import { Movie } from '../../shared/types';
import { transformMovies } from '../../shared/helpers/transformMovies';

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
