import Home from '../components/Home';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import UserPage from '../components/UserPage';
import ManagePost from '../components/ManagePost';

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
    element: <UserPage />,
  },
  {
    id: 5,
    path: '/posts/manage',
    exact: true,
    isLogin: true,
    element: <ManagePost />,
  },
  {
    id: 6,
    path: '/logout',
    exact: true,
    isLogin: true,
    element: <Home />,
  },
];
