import React from 'react';

class Movie extends React.Component{
  render(){
    const {Title, Poster} = this.props;
    return (
      <div className="movie">
        <div className="title">
          <h1 className ="title">{Title}</h1>
        </div>
        <div className="poster">
          <img src={Poster} alt="my movie poster"/>
        </div>
      </div>
    )
  }
}

export default Movie;
