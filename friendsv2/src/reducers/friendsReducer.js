import {
  FETCHING_FRIENDS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADDING_FRIENDS,
  ADD_FRIENDS_SUCCESS,
  ADD_FRIENDS_FAILURE,
  REMOVING_FRIENDS,
  REMOVE_FRIENDS_SUCCESS,
  REMOVE_FRIENDS_FAILURE,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

const initialState = {
  friends: [],
  loggingIn: false,
  loading: false,
  error: ''
};

function friendsReducer(state = initialState, action) {
  console.log(`--------------friends reducer fired`);

  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case FETCHING_FRIENDS:
      return {
        ...state,
        loading: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ADDING_FRIENDS:
      return {
        ...state,
        loading: true
      };
    case ADD_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case ADD_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case REMOVING_FRIENDS:
      return {
        ...state,
        loading: true
      };
    case REMOVE_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case REMOVE_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}

export default friendsReducer;
