import Home from "../components/Home";
import LogIn from "../components/LogIn";
import Register from "../components/Register";

export const routes= [
    {
        id: 1,
        path: '/',
        exact: true,
        element: <Home/>
    },
    {
        id: 2,
        path: '/login',
        exact: true,
        element: <LogIn/>
    },
    {
        id: 3,
        path: '/register',
        exact: true,
        element: <Register/>
    },
]