import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact to="/" component={DashboardPage} /> */}
        <Route exact to="/posts" component={PostsPage} />
      </Switch>
    </Router>
  );
};

export default App;
