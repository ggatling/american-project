import React from 'react';
import {Card,Row, Container, ListGroup} from 'react-bootstrap';

const Profile = (props) => {
  return(
  <div className="profile">
  <Card style={{ width: '18rem' }}>
  <Card.Header>Profile</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>E-Mail:{props.email}</ListGroup.Item>
    <ListGroup.Item>Favorite Moive: {props.favorite_movie}</ListGroup.Item>
    <ListGroup.Item>Favorite Actor: {props.favorite_actor}</ListGroup.Item>
    <ListGroup.Item>Favorite Genre: {props.favorite_genre}</ListGroup.Item>
  </ListGroup>
</Card>
</div>
  )
}

export default Profile;
