import axios from 'axios';
import { axiosAuth } from '../axiosAuth';

// Fetch + Initial Render
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS_SUCESS = 'FETCH_FRIENDS_SUCESS';
export const FETCH_FRIENDS_FAULURE = 'FETCH_FRIENDS_FAULURE';

// Add Friends
export const ADDING_FRIENDS = 'ADDING_FRIENDS';
export const ADD_FRIENDS_SUCESS = 'ADD_FRIENDS_SUCESS';
export const ADD_FRIENDS_FAULURE = 'ADD_FRIENDS_FAULURE';

// Remove Friends
export const REMOVING_FRIENDS = 'REMOVING_FRIENDS';
export const REMOVE_FRIENDS_SUCESS = 'REMOVE_FRIENDS_SUCESS';
export const REMOVE_FRIENDS_FAULURE = 'REMOVE_FRIENDS_FAULURE';