import Home from "../components/Home";
import LogIn from "../components/LogIn";
import Registration from "../components/Registration";


export default [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Home
    },
    {
        id: 2,
        path: '/login',
        exact: true,
        component: LogIn
    },
    {
        id: 3,
        path: '/registration',
        exact: true,
        component: Registration
    },
]


