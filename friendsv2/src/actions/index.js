import axios from 'axios';
import { axiosAuth } from '../axiosAuth';


// Fetch + Initial Render
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const fetchFriends = () => dispatch => {
  
  dispatch({ type: FETCHING_FRIENDS });
  console.log(`---------------fetching friends`);
  axiosAuth()
    .get(`http://localhost:5000/api/friends/`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err });
    });
};

// Add Friends
export const ADDING_FRIENDS = 'ADDING_FRIENDS';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';

export const addFriends = friend => dispatch => {
  dispatch({ type: ADDING_FRIENDS });
  console.log(`-------------------adding friends`);
  axiosAuth()
    .post(`http://localhost:5000/api/friends/`, friend)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FRIENDS_FAILURE, payload: err });
    });
};

// Remove Friends
export const REMOVING_FRIENDS = 'REMOVING_FRIENDS';
export const REMOVE_FRIENDS_SUCCESS = 'REMOVE_FRIENDS_SUCCESS';
export const REMOVE_FRIENDS_FAILURE = 'REMOVE_FRIENDS_FAILURE';

export const removeFriends = id => dispatch => {
  dispatch({ type: REMOVING_FRIENDS });
  console.log(`-------------------remove friends`);
  axiosAuth()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      // console.log(res);
      dispatch({ type: REMOVE_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REMOVE_FRIENDS_FAILURE, payload: err });
    });
};

// Login
export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};
