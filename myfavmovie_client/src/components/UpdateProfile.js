import React, {useState} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UpdateProfile = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Update Profile</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Update Profile</ModalHeader>
        <ModalBody>
        <Form onSubmit={e => props.updateProfile(e)}>
          <FormGroup>
            <Input
              type="text"
              name="title"
              id="title"
              value={props.email}
              onChange={props.handleInputEmailChange}
              placeholder="email"
            />
            <br/>
            <Input
              type="text"
              name="poster"
              id="poster"
              value={props.favorite_movie}
              onChange={props.handleInputFavMovieChange}
              placeholder="favorite movie"
            />
            <br/>
            <Input
              type="text"
              name="poster"
              id="poster"
              value={props.favorite_actor}
              onChange={props.handleInputFavActorChange}
              placeholder="favorite actor"
            />
            <br/>
            <Input
              type="text"
              name="poster"
              id="poster"
              value={props.favorite_genre}
              onChange={props.handleInputFavGenreChange}
              placeholder="favorite genre"
            />
          </FormGroup>
          <br/>


            <Button type="submit" onClick={toggle} className="btn btn-primary btn-block"color="danger">
            Submit</Button>
        </Form>
        </ModalBody>
        <ModalFooter>

        <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

  export default UpdateProfile;
