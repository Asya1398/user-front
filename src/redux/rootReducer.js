// ** Redux Imports
import { combineReducers } from 'redux';
// ** Reducers Imports
import auth from './auth/reducer';

const rootReducer = combineReducers({
  auth,
});
export default rootReducer;
