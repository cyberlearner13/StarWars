import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import peopleReducer from './peopleReducer';

export default combineReducers({
  film:filmReducer,
  people:peopleReducer
})
