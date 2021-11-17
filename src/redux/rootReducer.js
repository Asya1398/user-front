// ** Redux Imports
import { combineReducers } from 'redux';
// ** Reducers Imports
import auth from './auth/reducer';
import post from './post/reducer';

const rootReducer = combineReducers({
  auth,
  post,
});
export default rootReducer;
