import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosApiInstance, config } from '../../configs';
import { loginRequest, loginSuccess, loginFailure } from './actions';
import { registerRequest, registerSuccess, registerFailure } from './actions';
import { logoutRequest, logoutSuccess, logoutFailure } from './actions';

const URL = `${config.API_URL}/auth`;

function* login({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.post(`${URL}/login`, payload)
    );
    if (response?.status === 200) {
      localStorage.setItem('accessToken', response.data.token);
      yield put(loginSuccess(response.data.user));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(loginFailure(e?.response?.data));
    }
  }
}

function* logout({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.post(`${URL}/`, payload)
    );
    if (response?.status === 200) {
      window.localStorage.removeItem('accessToken');
      // yield put(logoutSuccess(response.data.user));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(logoutFailure(e?.response?.data));
    }
  }
}

function* register({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.post(`${URL}/register`, payload)
    );
    if (response?.status === 200) {
      localStorage.setItem('accessToken', response.data.token);
      yield put(registerSuccess(response.data.user));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(registerFailure(e?.response?.data));
    }
  }
}

export default function* () {
  yield takeLatest(loginRequest, login);
  yield takeLatest(logoutRequest, logout);
  yield takeLatest(registerRequest, register);
}
