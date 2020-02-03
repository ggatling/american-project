import React ,{useState} from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';


function NavigationBar({handleInput, search,isLoggedIn }){
  // const [state,setState] = useState({
  //   isLoggedIn:
  // });


  return(
    <div>
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">My Favorite Movie</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="home">Home</Nav.Link>
    <Nav.Link href="savedmovies">Saved Movies</Nav.Link>
    {isLoggedIn ? <Nav.Link href="logout">Logout</Nav.Link>: <Nav.Link href="user">Login/SignUp</Nav.Link>}

  </Nav>
</Navbar>


    </div>
  );
};

export default NavigationBar;
