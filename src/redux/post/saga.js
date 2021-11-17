import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosApiInstance, config } from '../../configs';
import { getPostRequest, getPostSuccess, getPostFailure } from './actions';

const URL = `${config.API_URL}/post`;

function* getPosts({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.post(`${URL}/posts`, payload)
    );
    if (response?.status === 200) {
      yield put(getPostSuccess(response.data.post));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getPostFailure(e?.response?.data));
    }
  }
}

export default function* () {
  yield takeLatest(getPostRequest, getPosts);
}
