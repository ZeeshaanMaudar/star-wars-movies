import { createSelector } from 'reselect';

interface State {
  movies: {
    loading: boolean,
    moviesList: any[],
    error: string,
  }
}

export const selectMovies = (state: State) => state.movies;

// fetch movies list
export const selectIsFetchingMovies = createSelector(
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
