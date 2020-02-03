import React, { Component } from "react";
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';


class NavigationBar extends Component{
  constructor(props){
    super(props);
    this.state ={
      isLoggedIn:false
    };
  }

componentDidMount=()=> {
    this.checkLogin();
    if (this.checkLogin()) {
      this.setState(prevState => {
        return { isLoggedIn: true }
      })
    } else {
      this.setState(prevState => {
        return { isLoggedIn: false }
      })
    }
  }
  checkLogin = () => {
      if (localStorage.getItem("user") === null || localStorage.getItem("user") === "") {
        return false;
      } else if (localStorage.getItem("user") !== null || localStorage.getItem("user") !== "") {
        return true;
      }
    }


render(){
  return(
    <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">My Favorite Movie</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="savedmovies">Saved Movies</Nav.Link>
            {(this.checkLogin()) ? <Nav.Link href="logout">Logout</Nav.Link> : <Nav.Link href="user">Login/SignUp</Nav.Link>}
          </Nav>
        </Navbar>
      </div>
  );
}
}
export default NavigationBar;
