import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosApiInstance, config } from '../../configs';
import {
  getUserPostsRequest,
  getUserPostsSuccess,
  getUserPostsFailure,
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsFailure,
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFailure,
  createPostRequest,
  createPostSuccess,
  createPostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
  getPostRequest,
  getPostSuccess,
  getPostFailure,
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
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
function* getAllPosts() {
  try {
    const response = yield call(() => axiosApiInstance.get(`${URL}/posts`));
    if (response?.status === 200) {
      yield put(getAllPostsSuccess(response.data.posts));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getAllPostsFailure(e?.response?.data));
    }
  }
}
function* getAllUsers() {
  try {
    const response = yield call(() => axiosApiInstance.get(`${URL}/users`));
    if (response?.status === 200) {
      yield put(getAllUsersSuccess(response.data.users));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getAllUsersFailure(e?.response?.data));
    }
  }
}
function* createPost({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.post(`${URL}/create`, payload)
    );
    if (response?.status === 200) {
      yield put(createPostSuccess(response.data.post));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(createPostFailure(e?.response?.data));
    }
  }
}
function* deletePost({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.delete(`${URL}/delete/${payload}`)
    );
    if (response?.status === 200) {
      yield put(deletePostSuccess(response.data.post));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(deletePostFailure(e?.response?.data));
    }
  }
}
function* getPost({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.get(`${URL}/${payload}`)
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
function* updatePost({ payload }) {
  try {
    const response = yield call(() => {
      axiosApiInstance.put(`${URL}/update/${payload.id}`, payload);
    });
    if (response?.status === 200) {
      yield put(updatePostSuccess(response.data.post));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(updatePostFailure(e?.response?.data));
    }
  }
}
export default function* () {
  yield takeLatest(getUserPostsRequest, getUserPosts);
  yield takeLatest(getAllUsersRequest, getAllUsers);
  yield takeLatest(getAllPostsRequest, getAllPosts);
  yield takeLatest(createPostRequest, createPost);
  yield takeLatest(deletePostRequest, deletePost);
  yield takeLatest(getPostRequest, getPost);
  yield takeLatest(updatePostRequest, updatePost);
}
