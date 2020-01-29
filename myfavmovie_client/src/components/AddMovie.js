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
              name="brand"
              id="brand"
              value={props.title}
              onChange={props.handleInputTitleChange}
              placeholder="brand"
            />
          </FormGroup>
            <Button type="submit" onClick={toggle} className="btn btn-primary btn-block">Submit</Button>
        </Form>
        </ModalBody>
        <ModalFooter>

        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

  export default AddMovie;
