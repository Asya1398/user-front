import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import post from './post/saga';

export default function* rootSaga() {
  yield all([auth()]);
  yield all([post()]);
}
