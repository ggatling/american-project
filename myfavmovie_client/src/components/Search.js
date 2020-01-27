import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import {Container,Col, Row} from 'react-bootstrap';

function Search ({handleInput, search}){
  return (
    <Container>
    <Row>
    <Col></Col>
    <Col>
    <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4">
        <input className="form-control mr-sm-3" type="text" placeholder="Search Movie" aria-label="Search"
        onChange={handleInput}
        onKeyPress={search}/>
      </MDBFormInline>
    </MDBCol>
    </Col>
    <Col></Col>
    </Row>
    </Container>
  );
}

export default Search;
