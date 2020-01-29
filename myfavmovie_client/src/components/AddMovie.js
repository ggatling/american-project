import React, {useState} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddMovie = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Add Movie</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Movie</ModalHeader>
        <ModalBody>
        <Form onSubmit={e => props.addSavedMovie(e)}>
          <FormGroup>
            <Input
              type="text"
              name="title"
              id="title"
              value={props.title}
              onChange={props.handleInputTitleChange}
              placeholder="title"
            />
            <Input
              type="text"
              name="poster"
              id="poster"
              value={props.poster}
              onChange={props.handleInputPosterChange}
              placeholder="poster"
            />
          </FormGroup>
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

  export default AddMovie;
