import types from '../constants/actionTypes';

const initialState = {
  fetching:false,
  fetched: false,
  data:{},
  err:{}
}
export default function (state = initialState,action){
  switch (action.type) {
    case types.FETCH_MOVIE:
      return {...state, fetching : true }
    case types.FETCH_MOVIE_SUCCESS:
      return {...state,data:action.payload,fetching:false,fetched:true}
    default:
      return state
  }
}
