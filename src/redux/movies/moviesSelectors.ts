import { createSelector } from 'reselect';
import { MovieDetails } from '../../shared/types';

interface State {
  movies: {
    loading: boolean,
    moviesList: any[],
    error: string,
    movieDetails: MovieDetails | null,
  }
}

export const selectMovies = (state: State) => state.movies;

// fetch movies list
export const selectIsLoading = createSelector(
  [selectMovies],
  movies => movies.loading
);

export const selectMoviesList = createSelector(
  [selectMovies],
  movies => movies.moviesList
);

export const selectError = createSelector(
  [selectMovies],
  movies => movies.error
);

// fetch movie details
export const selectMovieDetails = createSelector(
  [selectMovies],
  movies => movies.movieDetails
);
