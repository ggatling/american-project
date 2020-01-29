import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import {
  Row, Col, Container
} from 'react-bootstrap';
import AddMovie from "./AddMovie.js";
import Movie from "./Movie.js";

class SavedMovies extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      savedMovies:[],
      users:localStorage.getItem("user")
    }
  }

  componentDidMount =() =>{
    this.getSavedMovies();
  }


  getSavedMovies = () =>{
    fetch("http://localhost:8080/savedmovies/list",{
      method: "Get",
      headers: new Headers({
        'Authorization': "Bearer " + this.state.users,
        "Content-Type": "application/json"
      })
    })
    .then (res =>{
      return res.json()
      console.log(res)

    })
    .then (res =>{
      console.log(res)
      this.setState({
        savedmovies: res
      })
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  addSavedMovie =(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/savedmovies",{
      method:"Post",
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + localStorage.getItem("user")
      },
      body: JSON.stringify({
        title:this.state.title,
        poster:this.state.poster
      })
    })
    .then(res => {
      return res.json();
    })
    .then(res =>{
      const savedMoviesObj ={
        title: res.title,
        poster: res.poster
      }
      this.setState({
        title: res.title,
        poster: res.poster,
        savedMovies:[...this.state.savedMovies, savedMoviesObj]
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

handleInputTitleChange = e => {
  this.setState({title:e.target.value})
}

handleInputPosterChange = e => {
  this.setState({poster:e.target.value})
}

render(){
  return(
    <div>
    <Container className="movieList">
      <Row>
        <Col> Click the button to add your favorite movie to the list </Col>
      </Row>

      <Row>
          <Col>
              <AddMovie
                title = {this.state.title}
                poster = {this.state.poster}
                handleInputTitleChange = {this.handleInputTitleChange}
                handleInputPosterChange = {this.handleInputPosterChange}
                addSavedMovie = {e => this.addSavedMovie(e)}
              />
            </Col>
          </Row>

          {this.state.savedMovies.length > 0 && this.state.savedMovies.map(movie => {
               return (
                 <Movie
                  title = {movie.title}
                  poster = {movie.poster}
                  />
               )

             })}
      </Container>
    </div>
  )

  }
}

export default SavedMovies;
