import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import {
  Row, Col, Container
} from 'react-bootstrap';
import AddMovie from "./AddMovie.js";
import Movie from "./Movie.js";
import Profile from "./Profile.js";

class SavedMovies extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      savedMovies:[],
      email:'',
      favorite_movie:'',
      favorite_actor:'',
      favorite_genre:'',
      id:'',
      users:localStorage.getItem("user")
    }
  }

  componentDidMount =() =>{
    this.getSavedMovies();
    this.getProfile();
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
        savedMovies: res
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
      //alerts user that they need to login/signup first
      alert("WHOOPS, log into your account to add a movie!");
    });
  }


  deleteMovie = (e) => {
      fetch((`http://localhost:8080/movies/`+this.state.id), {
          method: 'DELETE',
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("user"),
              "Content-Type": "application/json"
          }
      })
      .then((res) => {
          if (res.status === 200) {
              alert("Movie Deleted!");
          } else {
              alert("Something went wrong...");
          }
      })
      .catch((error) => {
          alert("Something went wrong...");
      })
}


getProfile = () =>{
  fetch("http://localhost:8080/profile",{
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
    this.setState({
      email:res.email,
      favorite_movie:res.favorite_movie,
      favorite_actor:res.favorite_actor,
      favorite_genre:res.favorite_genre,
    })
    return res;
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

          <Profile
            email = {this.state.email}
            favorite_movie = {this.state.favorite_movie}
            favorite_actor = {this.state.favorite_actor}
            favorite_genre = {this.state.favorite_genre}
          />


          {this.state.savedMovies.length > 0 && this.state.savedMovies.reverse().map(movie => {
               return (
                 <Movie
                  key = {movie.id}
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
