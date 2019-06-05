import starwars from '../apis/starwars';
import axios from 'axios';
import types from "../constants/actionTypes";

export const fetchMovie = id => async dispatch => {
  dispatch({
    type:types.FETCH_MOVIE
  })
  const res = await starwars.get(`/films/${id}`)
  dispatch({
    type:types.FETCH_MOVIE_SUCCESS,
    payload:res.data
  })
}

export const fetchMovieWithURL = url => async dispatch => {
  dispatch({
    type:types.FETCH_MOVIE
  })
  const res = await axios.get(url)
  dispatch({
    type:types.FETCH_MOVIE_SUCCESS,
    payload:res.data
  })
}

export const resetMovie = () => dispatch => dispatch({ type: types.FETCH_MOVIE_RESET})
