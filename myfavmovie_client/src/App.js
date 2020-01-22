import React from 'react';
import './App.css';
import unirest from 'unirest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        sendRequest = (title) => {
        const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
        req.query({
        "page": "1",
        "r": "json",
        //searches a title of a movie or tv show
        "s": title
        });
        req.headers({
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",

        //personal API key 
        "x-rapidapi-key": "add2c15264mshb5c608a74e488f9p10fa60jsnff78d2ef135d"
        });
        req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
        });
        }
      </header>
    </div>
  );
}

export default App;

add2c15264mshb5c608a74e488f9p10fa60jsnff78d2ef135d
