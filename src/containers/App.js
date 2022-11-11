import React from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";

class App extends React.Component {
  render() {
    return (
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={
                    <route.component />
                }
              />
            );
          })}
        </Routes>
    );
  }
}

export default App;
