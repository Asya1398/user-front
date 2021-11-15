import Home from '../components/Home';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import UserPage from '../components/UserPage';
import CreatePost from '../components/CreatePost';

export const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    isLogin: true,
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
    element: <Register />,
  },
  {
    id: 4,
    path: '/user/:id',
    exact: true,
    element: <UserPage />,
  },
  {
    id: 5,
    path: '/create',
    exact: true,
    element: <CreatePost />,
  },
];
