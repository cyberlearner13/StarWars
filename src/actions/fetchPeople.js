import axios from 'axios';
import starwars from '../apis/starwars';
import types from "../constants/actionTypes";

export const fetchPeopleFromList = url => async dispatch =>{
  const res = await axios.get(url)
  console.log(res.data)
}
