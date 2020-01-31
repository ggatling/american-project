import React ,{useState} from 'react';
import Search from '../components/Search';
import axios from 'axios';
import Results from '../components/Results';
// import NavigationBar from '../components/NavigationBar';

function Home() {
  const [state,setState] = useState({
    //setting initial state
    s:"",
    //search query
    results:[],
    //results array
    Title:"",
    Poster:""
  });
  const apiurl = "http://www.omdbapi.com/?apikey=a8ec5866";

  const backendPost = "http://localhost:8080/savedmovies"

  const search = (e)=>{
      axios(apiurl + "&s="+ state.s)
      .then(({data})=>{
        let results = data.Search;
        //when you hit enter, search what the user input
        setState(prevState =>{
          return {...prevState, results: results }
        })
      })
      .catch(err =>{
        alert("ERROR If at first you dont succeed, try again")
      });
  }


  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return{...prevState, s: s}
    });
    console.log(state.s)
  }


  const saveMovie = (movieTitle, moviePoster) => {
    // e.preventDefault();
    fetch(backendPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + localStorage.getItem("user")
      },
      body: JSON.stringify({
        title: movieTitle,
        poster: moviePoster
      })
    })
    .then(res => {
     return res.json();
   })
   .then(res =>{
     if (res.status === 200) {
         alert("Movie Added!");
     } else {
         alert("WHOOPS, log into your account to add a movie!");
     }
   })
      .catch(err => {
        //alerts user that they need to login/signup first
        alert("Something went wrong...");
      });
  }


  return (
    <div className="App">
      <header>

      </header>
        <main>
          <Search handleInput ={handleInput} search ={search} />
          <Results results={state.results} saveMovie={saveMovie} />

        </main>

    </div>
  );
}

export default Home;
