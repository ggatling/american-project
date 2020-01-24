import React from 'react';
import './App.css';
import unirest from 'unirest';
import Movie from "./Movie.js";
import Search from "./Search.js";


class Home extends React.Component {
  state = {
    movies:[]
  }
 sendRequest = (title) => {
   const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
   req.query({
     "page": "1",
     "r": "json",
     "s": title
   });
   req.headers({
     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
     "x-rapidapi-key": "add2c15264mshb5c608a74e488f9p10fa60jsnff78d2ef135d"
   });
   req.end((res) => {
     if (res.error) throw new Error(res.error);
     const movies = res.body.Search;
     this.setState({movies});
     console.log(res.body);
   });
 }
 render() {
   return (
     <div className="App">
       <header className="App-header">
       {this.state.movies.map((movie) => {
         return <Movie {...movie}/>
            })}
          <Search handleSendRequest={this.sendRequest}/>

       </header>
     </div>
   );
 }
}

export default Home;
