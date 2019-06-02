import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "./MainLayout";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="**" component={MainLayout} />
        {/* <Route  component={}/> */}
      </Switch>
    </Router>
  );
};

export default App;
