import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routers/routes';
import BrowserRouter from './BrowserRouter';

function App() {
  const logged = routes.filter((r) => r.isLogin === true);
  const logout = routes.filter((r) => r.isLogin === false);

  return (
    <BrowserRouter>
      <Routes>
        {localStorage.getItem('accessToken')
          ? logged.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))
          : logout.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
