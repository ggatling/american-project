import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Signup = props => {
  // console.log(`we are inside signup, email prop is ${props.email}`)
  return (

    <div>
      <h2> SignUp </h2>
      <Form onSubmit={e => props.submitSignup(e)}>
        <FormGroup>
          <Input
            type="username"
            name="username"
            id="username"
            value={props.username}
            onChange={props.handleUsernameChange}
            placeholder="username"
          />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              value={props.email}
              onChange={props.handleEmailChange}
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>

            <Input
              type="password"
              name="spassword"
              id="password"
              value={props.password}
              onChange={props.handlePasswordChange}
              placeholder="password"
            />
        </FormGroup>
        <Button color="warning" className="btn btn-primary btn-block">Sign Up</Button>
      </Form>
    </div>
  );
};
export default Signup;
