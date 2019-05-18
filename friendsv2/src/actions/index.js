import axios from 'axios';
import { axiosAuth } from '../axiosAuth';
import { dispatch } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/rxjs/internal/observable/pairs';

// Fetch + Initial Render
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS_SUCESS = 'FETCH_FRIENDS_SUCESS';
export const FETCH_FRIENDS_FAULURE = 'FETCH_FRIENDS_FAULURE';
export const fetchFriends = () => {
  dispatch({ type: FETCHING_FRIENDS });
  console.log(`---------------fetching friends`);
  axiosAuth()
    .get(`http://localhost:5000/api/friends/`)
    .then(res => {
      console.log(res.data);
      dispatch({ FETCH_FRIENDS_SUCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FRIENDS_FAULURE });
    });
};

// Add Friends
export const ADDING_FRIENDS = 'ADDING_FRIENDS';
export const ADD_FRIENDS_SUCESS = 'ADD_FRIENDS_SUCESS';
export const ADD_FRIENDS_FAULURE = 'ADD_FRIENDS_FAULURE';

// Remove Friends
export const REMOVING_FRIENDS = 'REMOVING_FRIENDS';
export const REMOVE_FRIENDS_SUCESS = 'REMOVE_FRIENDS_SUCESS';
export const REMOVE_FRIENDS_FAULURE = 'REMOVE_FRIENDS_FAULURE';
