import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosApiInstance, config } from '../../configs';
import { loginRequest, loginSuccess, loginFailure } from './actions';

const URL = `${config.API_URL}/auth`;

function* login({ payload }) {
  try {
    console.log('payload', payload);
    const response = yield call(() =>
      axiosApiInstance.post(`${URL}/login`, payload)
    );
    if (response?.status === 200) {
      yield put(loginSuccess(response.data));
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
