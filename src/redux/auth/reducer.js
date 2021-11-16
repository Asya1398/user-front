import { handleActions } from 'redux-actions';
import { loginRequest, loginSuccess, loginFailure } from './actions';
import { logoutRequest, logoutSuccess, logoutFailure } from './actions';
import { registerRequest, registerSuccess, registerFailure } from './actions';

const initialState = {
  isLoginSuccess: false,
  authUser: {},
  errorMessages: [],
};

const reducer = handleActions(
  {
    [loginRequest]: (state) => ({
      ...state,
      isLoginSuccess: false,
      errorMessages: [],
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
