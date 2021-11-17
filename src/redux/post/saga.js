import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosApiInstance, config } from '../../configs';
import {
  getUserPostsRequest,
  getUserPostsSuccess,
  getUserPostsFailure,
} from './actions';

const URL = `${config.API_URL}/post`;

function* getUserPosts() {
  try {
    const response = yield call(() =>
      axiosApiInstance.get(`${URL}/user-posts`)
    );
    if (response?.status === 200) {
      yield put(getUserPostsSuccess(response.data.posts));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getUserPostsFailure(e?.response?.data));
    }
  }
}
const test = '';
export default function* () {
  yield takeLatest(getUserPostsRequest, getUserPosts);
}
