import React from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';

function NavigationBar({handleInput, search}){

  return(
    <div>
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">My Favorite Movie</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="home">Home</Nav.Link>
    <Nav.Link href="user">Login/SignUp</Nav.Link>
    <Nav.Link href="savedmovies">Saved Movies</Nav.Link>
  </Nav>
  <Form inline>
    <input className="form-control" type="text" placeholder="Search" aria-label="Search"
    onChange={handleInput}/>
    <Button variant="outline-warning" onClick={search}>Search</Button>
  </Form>
</Navbar>


    </div>
  );
};

export default NavigationBar;
