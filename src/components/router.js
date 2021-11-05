import routes from "../routers/routes";
import { matchPath, Route, Routes } from "react-router-dom";

const Router = () => {
    let match = null;

    routes.every((route) => {
        match = matchPath(window.location.pathname, {
            path: route.path,
            exact: true,
            strict: false
        })
        return !match;

    })

    return (
        <Router>
            <Routes>
                {routes.map(({ id, path, component }) => {
                    return (
                        <Route
                            key={id}
                            path={path}
                            exact
                            component={component}
                        />
                    )
                })}
            </Routes>
        </Router>
    )
}

export default Router