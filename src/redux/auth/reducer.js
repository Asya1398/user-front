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
  loginErrorMessages: [],
  logoutErrorMessages: [],
  registerErrorMessages: [],
};

const reducer = handleActions(
  {
    [loginRequest]: (state) => ({
      ...state,
      isLoginSuccess: false,
      loginErrorMessages: [],
    }),
    [loginSuccess]: (state, { payload }) => ({
      ...state,
      isLoginSuccess: true,
      authUser: payload,
    }),
    [loginFailure]: (state, { payload }) => ({
      ...state,
      isLoginSuccess: false,
      loginErrorMessages: payload,
    }),
    [logoutRequest]: (state) => ({
      ...state,
      isLogoutSuccess: false,
      logoutErrorMessages: [],
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
      logoutErrorMessages: payload,
    }),
    [registerRequest]: (state) => ({
      ...state,
      isRegisterSuccess: false,
      registerErrorMessages: [],
    }),
    [registerSuccess]: (state, { payload }) => {
      window.location = '/posts';
      return {
        ...state,
        isRegisterSuccess: true,
        authUser: payload,
      };
    },
    [registerFailure]: (state, { payload }) => ({
      ...state,
      isRegisterSuccess: false,
      registerErrorMessages: payload,
    }),
  },
  initialState
);
export default reducer;
