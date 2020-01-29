import React from 'react';

class SavedMovies extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      savedmovies:[],
      users:localStorage.getItem("user")
    }
  }

  componentDidMount =() =>{

  }


  getSavedMovies = () =>{
    fetch("http://localhost:8080/savedmovies/list",{
      method:"Get",
      headers: new Headers({
        "Authorization": "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      })
    })
    .then (res =>{
      return res.json()
    })
    .then (res =>{
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
  this,setState({title:e.target.value})
}

handleInputPosterChange = e => {
  this,setState({poster:e.target.value})
}

render(){
  return(
    <div>
    </div>
  )
}

}

export default SavedMovies;
