import React from 'react';
import {Card,Button,Row, Container} from 'react-bootstrap';



const Movie = props => {
  return(
    <Container>
    <Row>
    <div className="d-flex flex-row">
    <div className="p-2">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.poster} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      </Card.Text>
        <Button variant="danger">Delete</Button>
    </Card.Body>
  </Card>
    </div>
    </div>
    </Row>
    </Container>
  )
}

export default Movie;
