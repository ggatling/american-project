import React from 'react';
import './App.css';
import unirest from 'unirest';

class App extends React.Component {
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
     console.log(res.body);
   });
 }
 render() {
   return (
     <div className="App">
       <header className="App-header">
       </header>
     </div>
   );
 }
}

export default App;
