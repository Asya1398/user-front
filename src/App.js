import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routers/routes';
import MenuNav from './components/MenuNav';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  const logged = routes.filter((r) => r.isLogin === true);
  const logout = routes.filter((r) => r.isLogin === false);
  return (
    <div className="App">
      <MenuNav history={history} />
      <BrowserRouter>
        <Routes>
          {localStorage.getItem('accessToken')
            ? logged.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              ))
            : logout.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
