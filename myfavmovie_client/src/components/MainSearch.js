import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import {Container,Col, Row} from 'react-bootstrap';


const MainSearch = () => {
  return (
    <Container>
    <Row>
    <Col></Col>
    <Col>
    <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4">
        <input className="form-control mr-sm-3" type="text" placeholder="Search Movie" aria-label="Search" />
        <MDBBtn outline color="warning" rounded size="md" type="submit" className="mr-auto">
          Search
        </MDBBtn>
      </MDBFormInline>
    </MDBCol>
    </Col>
    <Col></Col>
    </Row>
    </Container>
  );
}

export default MainSearch;
