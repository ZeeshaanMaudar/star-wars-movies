import * as actionTypes from './moviesActionTypes';

const initialState = {
  loading: false,
  moviesList: [],
  error: '',
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
    
    default:
      return state;
  }
}

export default moviesReducer;

