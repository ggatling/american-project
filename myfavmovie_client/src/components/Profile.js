import React from 'react';
import {Card,Row, Container, ListGroup} from 'react-bootstrap';

const Profile = (props) => {
  return(
  <Card style={{ width: '18rem' }}>
  <Card.Header>Profile</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>{props.email}</ListGroup.Item>
    <ListGroup.Item>{props.favorite_movie}</ListGroup.Item>
    <ListGroup.Item>{props.favorite_actor}</ListGroup.Item>
    <ListGroup.Item>{props.favorite_genre}</ListGroup.Item>
  </ListGroup>
</Card>
  )
}

export default Profile;
