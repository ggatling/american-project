import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Layout } from "./components/Layout.js";
import NavigationBar from "./components/NavigationBar.js";
import { Jumbotron } from "./components/Jumbotron.js";
import Home from "./components/Home.js";
import User from "./components/User.js"
import SavedMovies from "./components/SavedMovies.js"

class App extends Component{


  render(){
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />



        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/savedmovies" component={SavedMovies} />
          </Switch>
        </Router>

    </React.Fragment>
    );
  }
}


export default App;
