import React, {Component} from "react";
// import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Layout } from "./components/Layout.js";
import NavigationBar from "./components/NavigationBar.js";
import { Jumbotron } from "./components/Jumbotron.js";
import MainSearch from "./components/MainSearch.js";

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <MainSearch />
        <Router>
          <Switch>

          </Switch>
        </Router>

    </React.Fragment>
    );
  }
}


export default App;
