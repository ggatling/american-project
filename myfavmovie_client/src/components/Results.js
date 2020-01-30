import React from 'react'
import Result from './Result'

function Results ({ results, saveMovie }) {
return (
  <div className="results">
    {results.map(result => (
      <Result key={result.imdbID} result={result} saveMovie={saveMovie}/>
    ))}
  </div>
)
}

export default Results
