import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import peopleReducer from './peopleReducer';
import planetReducer from './planetReducer';

export default combineReducers({
  film:filmReducer,
  people:peopleReducer,
  planets:planetReducer
})
