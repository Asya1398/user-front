import { handleActions } from 'redux-actions';
import {
  getUserPostsRequest,
  getUserPostsSuccess,
  getUserPostsFailure,
} from './actions';

const initialState = {
  isGetPostSuccess: false,
  userPosts: [],
  getPostErrorMessages: [],
};

const reducer = handleActions(
  {
    [getUserPostsRequest]: (state) => ({
      ...state,
      isGetPostSuccess: false,
      getPostErrorMessages: [],
    }),
    [getUserPostsSuccess]: (state, { payload }) => ({
      ...state,
      isGetPostSuccess: true,
      userPosts: payload,
    }),
    [getUserPostsFailure]: (state, { payload }) => ({
      ...state,
      isGetPostSuccess: false,
      getPostErrorMessages: payload,
    }),
  },
  initialState
);

export default reducer;
