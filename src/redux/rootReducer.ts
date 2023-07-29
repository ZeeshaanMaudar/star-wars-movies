import { combineReducers } from 'redux';

import moviesReducer from './movies/moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
