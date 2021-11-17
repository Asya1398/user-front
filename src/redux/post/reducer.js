import { handleActions } from 'redux-actions';
import { getPostRequest, getPostSuccess, getPostFailure } from './actions';

const initialState = {
  isGetPostSuccess: false,
  getPost: [],
  getPostErrorMessages: [],
};

const reducer = handleActions(
  {
    [getPostRequest]: (state) => ({
      ...state,
      isGetPostSuccess: false,
      getPostErrorMessages: [],
    }),
    [getPostSuccess]: (state, { payload }) => ({
      ...state,
      isGetPostSuccess: true,
      getPost: payload,
    }),
    [getPostFailure]: (state, { payload }) => ({
      ...state,
      isGetPostSuccess: false,
      getPostErrorMessages: payload,
    }),
  },
  initialState
);
export default reducer;
