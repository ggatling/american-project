import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Logout extends Component {
  componentDidMount() {
    localStorage.clear();
    alert("Logout Successful!")
  }
render(){
  return(
    <Redirect to= "/home" />
  )
}
}
export default Logout;
