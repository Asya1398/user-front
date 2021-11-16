import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosApiInstance, config } from '../../configs';
import { loginRequest, loginSuccess, loginFailure } from './actions';

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

export default function* () {
  yield takeLatest(loginRequest, login);
}
