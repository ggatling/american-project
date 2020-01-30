import React from "react";
import { MDBCol, MDBBtn } from "mdbreact";

function Search ({handleInput, search}){
  return (
    <MDBCol lg="10">
      <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
        onChange={handleInput} />
        <MDBBtn color="warning" onClick={search}> Search </MDBBtn>
      </div>

    </MDBCol>


  );
}

export default Search;
