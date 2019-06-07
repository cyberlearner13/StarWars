import axios from 'axios';
import starwars from '../apis/starwars';
import types from "../constants/actionTypes";

export const fetchPlanets = () => async dispatch => {
  dispatch({
    type:types.FETCH_PLANETS
  })
  try {
    const res = await starwars.get(`planets`)
    dispatch({
      type:types.FETCH_PLANETS_SUCCESS,
      payload:res.data
    })
  } catch (e) {
    dispatch({
      type:types.FETCH_PLANETS_FAILURE,
      payload: e
    })
  }

}
