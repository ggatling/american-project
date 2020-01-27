import React from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';

const NavigationBar = () => {

  return(
    <div>
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">My Favorite Movie</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="home">Home</Nav.Link>
    <Nav.Link href="user">Login/SignUp</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search Movie" className="mr-sm-2" />
    <Button variant="outline-warning">Search</Button>
  </Form>
</Navbar>


    </div>
  );
};

export default NavigationBar;
