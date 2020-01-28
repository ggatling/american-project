import React ,{useState} from 'react';
import Search from '../components/Search';
import axios from 'axios';
import Results from '../components/Results';


function Home() {
  const [state,setState] = useState({
    //setting initial state
    s:"",
    //search query
    results:[],
    //results array
    selected:{}
    //opens movies popup
  });
  const apiurl = "http://www.omdbapi.com/?apikey=a8ec5866";

  const search = (e)=>{
      axios(apiurl + "&s="+ state.s).then(({data})=>{
        let results = data.Search;
        //when you hit enter, search what the user input
        setState(prevState =>{
          return {...prevState, results: results }
        })
      });
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return{...prevState, s: s}
    });
    console.log(state.s)
  }

  return (
    <div className="App">
      <header>

      </header>
        <main>
          <Search handleInput ={handleInput} search ={search} />
          <Results results={state.results}  />


        </main>

    </div>
  );
}

export default Home;
