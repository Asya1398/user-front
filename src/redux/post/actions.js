import { createAction } from 'redux-actions';

export const getUserPostsRequest = createAction('GET_USER_POSTS_REQUEST');
export const getUserPostsSuccess = createAction('GET_USER_POSTS_SUCCESS');
export const getUserPostsFailure = createAction('GET_USER_POSTS_FAILURE');
