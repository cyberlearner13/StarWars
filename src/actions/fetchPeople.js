import axios from 'axios';
import starwars from '../apis/starwars';
import types from "../constants/actionTypes";

export const fetchPeopleFromList = url => async dispatch =>{
  dispatch({
    type:types.FETCH_PEOPLE_IN_MOVIE
  })
  const res = await axios.get(url)
  dispatch({
	type: types.FETCH_PEOPLE_IN_MOVIE_SUCCESS,
	payload: res.data.name
  })

}

export const fetchPeoples = () => async dispatch => {
  dispatch({
    type:types.FETCH_PEOPLES
  })
  const res = await starwars.get(`people`)
  dispatch({
    type:types.FETCH_PEOPLES_SUCCESS,
    payload:res.data
  })
}
