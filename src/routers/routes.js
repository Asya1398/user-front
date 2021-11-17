import Home from '../components/Home';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import ManagePost from '../components/ManagePost';
import UserPosts from '../components/UserPosts';

export const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    isLogin: false,
    element: <Home />,
  },
  {
    id: 2,
    path: '/login',
    exact: true,
    isLogin: false,
    element: <LogIn />,
  },
  {
    id: 3,
    path: '/register',
    exact: true,
    isLogin: false,
    element: <Register />,
  },
  {
    id: 4,
    path: '/posts',
    exact: true,
    isLogin: true,
    element: <UserPosts />,
  },
  {
    id: 5,
    path: '/posts/manage',
    exact: true,
    isLogin: true,
    element: <ManagePost />,
  },
];
