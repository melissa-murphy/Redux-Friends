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
export const addFriends = friend => {
  dispatch({ type: ADDING_FRIENDS });
  console.log(`-------------------adding friends`);
  axiosAuth()
    .post(`http://localhost:5000/api/friends/`, friend)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_FRIENDS_SUCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FRIENDS_FAULURE, payload: err });
    });
};

// Remove Friends
export const REMOVING_FRIENDS = 'REMOVING_FRIENDS';
export const REMOVE_FRIENDS_SUCESS = 'REMOVE_FRIENDS_SUCESS';
export const REMOVE_FRIENDS_FAULURE = 'REMOVE_FRIENDS_FAULURE';
export const removeFriends = id => dispatch => {
    dispatch({ type: REMOVING_FRIENDS });
    console.log(`-------------------remove friends`);
    axiosAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        // console.log(res);
        dispatch({ type: REMOVE_FRIENDS_SUCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REMOVE_FRIENDS_FAULURE, payload: err });
      });
  };