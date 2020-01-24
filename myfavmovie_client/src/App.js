import React from "react";
// import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Layout } from "./components/Layout.js";
import NavigationBar from "./components/NavigationBar.js";

function App(){
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>

        </Switch>
      </Router>

  </React.Fragment>
  );
}

export default App;
