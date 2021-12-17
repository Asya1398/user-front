import { handleActions } from 'redux-actions';
import {
  getUserPostsRequest,
  getUserPostsSuccess,
  getUserPostsFailure,
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsFailure,
  createPostRequest,
  createPostSuccess,
  createPostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFailure,
} from './actions';

const initialState = {
  isGetPostSuccess: false,
  isGetAllPostsSuccess: false,
  isGetAllUsersSuccess: false,
  isCreatePostSuccess: false,
  isDeletePostSuccess: false,
  userPosts: [],
  allPosts: [],
  allUsers: [],
  createPost: {},
  deletePost: [],
  getPostErrorMessages: [],
  getAllPostsErrorMessages: [],
  getAllUsersErrorMessages: [],
  createPostErrorMessages: [],
  deletePostErrorMessages: [],
};

const reducer = handleActions(
  {
    //Get user`s posts
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
    //Get all posts
    [getAllPostsRequest]: (state) => ({
      ...state,
      isGetAllPostsSuccess: false,
      getAllPostsErrorMessages: [],
    }),
    [getAllPostsSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllPostsSuccess: true,
      allPosts: payload,
    }),
    [getAllPostsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllPostsSuccess: false,
      getAllPostsErrorMessages: payload,
    }),
    //Get all users
    [getAllUsersRequest]: (state) => ({
      ...state,
      isGetAllUsersSuccess: false,
      getAllUsersErrorMessages: [],
    }),
    [getAllUsersSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllUsersSuccess: true,
      allUsers: payload,
    }),
    [getAllUsersFailure]: (state, { payload }) => ({
      ...state,
      isGetAllUsersSuccess: false,
      getAllUsersErrorMessages: payload,
    }),
    //Create user post
    [createPostRequest]: (state) => ({
      ...state,
      isCreatePostSuccess: false,
      createPostErrorMessages: [],
    }),
    [createPostSuccess]: (state, { payload }) => {
      window.location = '/posts';
      return {
        ...state,
        isCreatePostSuccess: true,
        createPost: payload,
      };
    },
    [createPostFailure]: (state, { payload }) => ({
      ...state,
      isCreatePostSuccess: false,
      createPostErrorMessages: payload,
    }),
    //Delete user post
    [deletePostRequest]: (state) => ({
      ...state,
      isDeletePostSuccess: false,
      deletePostErrorMessages: [],
    }),
    [deletePostSuccess]: (state, { payload }) => {
      return {
        ...state.userPosts.map((post) => {
          console.log(post);
          if (post.id !== payload) {
            return post;
          }
        }),
        isDeletePostSuccess: true,
        deletePost: payload,
      };
    },
    [deletePostFailure]: (state, { payload }) => ({
      ...state,
      isDeletePostSuccess: false,
      deletePostErrorMessages: payload,
    }),
  },
  initialState
);

export default reducer;
