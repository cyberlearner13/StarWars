import types from '../constants/actionTypes';

const initialState = {
  fetching:false,
  fetched: false,
  data:[],
  err:{}
}
export default function (state = initialState,action){
  switch(action.type){
    case types.FETCH_PEOPLE_IN_MOVIE:
       return {...state, fetching : true,fetched: false, data:[],err:{} }
    case types.FETCH_PEOPLE_IN_MOVIE_SUCCESS:
       return {...state,data:[...state.data,action.payload],fetching:false,fetched:true,err:{}}
    case types.FETCH_PEOPLE_IN_MOVIE_FAILURE:
       return {...state,err:action.payload,fetching:false,fetched:true,data:[]}
    case types.FETCH_PEOPLE_IN_MOVIE_RESET:
      return{ fetching:false, fetched: false,data:[],err:{}}
      case types.FETCH_PEOPLES:
         return {...state, fetching : true,fetched: false, data:[],err:{} }
      case types.FETCH_PEOPLES_SUCCESS:
         return {...state,data:[...state.data,action.payload],fetching:false,fetched:true,err:{}}
      case types.FETCH_PEOPLES_FAILURE:
         return {...state,err:action.payload,fetching:false,fetched:true,data:[]}
      case types.FETCH_PEOPLES_RESET:
        return{ fetching:false, fetched: false,data:[],err:{}}
    default:
      return state
    }
}
