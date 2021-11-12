import { handleActions } from 'redux-actions';
import { loginRequest, loginSuccess, loginFailure } from './actions';

const initialState = {
  isLoginSuccess: false,
  authUser: {},
};

const reducer = handleActions(
  {
    [loginRequest]: (state) => ({
      ...state,
      isLoginSuccess: false,
    }),
    [loginSuccess]: (state, { payload }) => ({
      ...state,
      isLoginSuccess: true,
      authUser: payload,
    }),
    [loginFailure]: (state, { payload }) => ({
      ...state,
      isLoginSuccess: false,
      errorMessages: payload,
    }),
  },
  initialState
);
export default reducer;
