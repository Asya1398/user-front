import { handleActions } from 'redux-actions';
import {
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} from './actions';

const initialState = {
  isLoginSuccess: false,
  isLogoutSuccess: false,
  isRegisterSuccess: false,
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
    [logoutRequest]: (state) => ({
      ...state,
      isLogoutSuccess: false,
      errorMessages: [],
    }),
    [logoutSuccess]: (state) => {
      window.location = '/login';

      return {
        ...state,
        isLogoutSuccess: true,
        authUser: {},
      };
    },
    [logoutFailure]: (state, { payload }) => ({
      ...state,
      isLogoutSuccess: false,
      errorMessages: payload,
    }),
    [registerRequest]: (state) => ({
      ...state,
      isRegisterSuccess: false,
      errorMessages: [],
    }),
    [registerSuccess]: (state, { payload }) => ({
      ...state,
      isRegisterSuccess: true,
      authUser: payload,
    }),
    [registerFailure]: (state, { payload }) => ({
      ...state,
      isRegisterSuccess: false,
      errorMessages: payload,
    }),
  },
  initialState
);
export default reducer;
