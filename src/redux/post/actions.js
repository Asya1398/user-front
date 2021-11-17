import { createAction } from 'redux-actions';

export const getPostRequest = createAction('GET_POST_REQUEST');
export const getPostSuccess = createAction('GET_POST_SUCCESS');
export const getPostFailure = createAction('GET_POST_FAILURE');
