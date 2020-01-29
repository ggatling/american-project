import React from 'react';
import {
  Row, Col, Container
} from 'react-bootstrap';


const Movie = props => {
  return(
    <Container className="allSneaker" style={
      { padding: "5px",}
    }>
      <Row>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>{props.title}</Col>
        <img src =
        {props.poster}
        />
      </Row>
 </Container>
  )
}

export default Movie;
