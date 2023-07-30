import * as actionTypes from './moviesActionTypes';

const initialState = {
  loading: false,
  moviesList: [],
  error: '',
  movieDetails: null,
};

const moviesReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.FETCH_MOVIES_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_MOVIES_LIST_SUCCESS:
      return {
        ...state,
        moviesList: action.payload.moviesList,
        loading: false
      }
    case actionTypes.FETCH_MOVIES_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case actionTypes.FETCH_SINGLE_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_SINGLE_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload.movieDetails,
        loading: false
      }
    case actionTypes.FETCH_SINGLE_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    
    default:
      return state;
  }
}

export default moviesReducer;

