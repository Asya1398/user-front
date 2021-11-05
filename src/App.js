import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { routes} from "./routers/routes";


function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            {routes.map(props => {
                console.log('props', props);
                return (
                    <Route key={props.id} {...props} />
                )
            })}
          </Routes>
        </Router>
      </div>
  );
}

export default App;
