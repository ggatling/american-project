import React from 'react';
import {Card,Button} from 'react-bootstrap';



const Movie = props => {
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.poster} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
        <Button variant="danger">Delete</Button>
    </Card.Body>
  </Card>

  )
}

export default Movie;
