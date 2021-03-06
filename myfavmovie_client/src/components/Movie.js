import React from 'react';
import {Card,Button,Row, Container} from 'react-bootstrap';



const Movie = (props) => {
  return(
    <div className="p-2">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.poster} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      </Card.Text>
        <Button variant="danger" onClick={() => props.deleteFunc(props.movieId)}>Delete</Button>
    </Card.Body>
  </Card>
    </div>

  )
}

export default Movie;
