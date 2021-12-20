import { createAction } from 'redux-actions';
//Get user`s posts
export const getUserPostsRequest = createAction('GET_USER_POSTS_REQUEST');
export const getUserPostsSuccess = createAction('GET_USER_POSTS_SUCCESS');
export const getUserPostsFailure = createAction('GET_USER_POSTS_FAILURE');
//Get all posts
export const getAllPostsRequest = createAction('GET_ALL_POSTS_REQUEST');
export const getAllPostsSuccess = createAction('GET_ALL_POSTS_SUCCESS');
export const getAllPostsFailure = createAction('GET_ALL_POSTS_FAILURE');
//Get all users
export const getAllUsersRequest = createAction('GET_ALL_USERS_REQUEST');
export const getAllUsersSuccess = createAction('GET_ALL_USERS_SUCCESS');
export const getAllUsersFailure = createAction('GET_ALL_USERS_FAILURE');
//Create post
export const createPostRequest = createAction('CREATE_POST_REQUEST');
export const createPostSuccess = createAction('CREATE_POST_SUCCESS');
export const createPostFailure = createAction('CREATE_POST_FAILURE');
//Delete post
export const deletePostRequest = createAction('DELETE_POST_REQUEST');
export const deletePostSuccess = createAction('DELETE_POST_SUCCESS');
export const deletePostFailure = createAction('DELETE_POST_FAILURE');
//Get post for updating
export const getPostRequest = createAction('GET_POST_REQUEST');
export const getPostSuccess = createAction('GET_POST_SUCCESS');
export const getPostFailure = createAction('GET_POST_FAILURE');
//Update post
export const updatePostRequest = createAction('UPDATE_POST_REQUEST');
export const updatePostSuccess = createAction('UPDATE_POST_SUCCESS');
export const updatePostFailure = createAction('UPDATE_POST_FAILURE');
