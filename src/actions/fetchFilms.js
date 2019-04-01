import starwars from '../apis/starwars';
import types from "../constants/actionTypes";

export const fetchMovie = id => {
  starwars.get(`/films/${id}`).then(res => console.log(res))
  return{
    type:types.FETCH_MOVIE,
    payload:{}
  }
}
