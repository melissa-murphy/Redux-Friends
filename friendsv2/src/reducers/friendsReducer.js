import {
  FETCHING_FRIENDS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAULURE,
  ADDING_FRIENDS,
  ADD_FRIENDS_SUCCESS,
  ADD_FRIENDS_FAULURE,
  REMOVING_FRIENDS,
  REMOVE_FRIENDS_SUCCESS,
  REMOVE_FRIENDS_FAULURE
} from 'actions';

const initialState = {
  friends: [],
  loading: false,
  error: ''
};

function friendsReducer(state = initialState, action) {
  console.log(`--------------friends reducer fired`);

  switch (action.type) {
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
    case FETCH_FRIENDS_FAULURE:
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
    case ADD_FRIENDS_FAULURE:
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
    case REMOVE_FRIENDS_FAULURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      break;
  }
}

export default friendsReducer;
