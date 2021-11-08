import './App.css';
import {
    BrowserRouter ,
    Routes,
    Route
} from 'react-router-dom';
import { routes } from './routers/routes';
import MenuNav from './components/MenuNav';

function App() {

    return (
        <div className="App">
            <MenuNav/>
            <BrowserRouter>
                <Routes>
                    {routes.map(route => (
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