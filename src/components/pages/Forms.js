import React, { Component } from "react";
import {
    Button,
    Form,
    Header,
    Icon,
    Input,
    Message,
    Segment,
    Table
  } from "semantic-ui-react";
class Forms extends Component{
    constructor(props) {
        super(props);
        this.state = {
          newUser: {
            name: "",
            email: "",
            role: "",
            caloryLimit: 0
          }
        };
      }

    render(){
       return( 
        <Segment>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>Username</label>
              <Input
                type="text"
                name="name"
                value={this.state.newUser.name}
                placeholder="Enter name..."
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Input
                type="text"
                name="email"
                value={this.state.newUser.email}
                placeholder="Enter email..."
              />
            </Form.Field>
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>Role</label>
              <Input
                type="text"
                name="role"
                value={this.state.newUser.role}
                placeholder="Enter role..."
              />
            </Form.Field>
            <Form.Field>
              <label>Calory Limit</label>
              <Input
                type="number"
                name="caloryLimit"
                value={this.state.newUser.caloryLimit}
                placeholder="Select Calory Limit"
                fluid
              />
            </Form.Field>
          </Form.Group>
          <Button primary type="submit" >
            Submit
          </Button>
          <Button >Clear</Button>
        </Form>
      </Segment>
      )
    }
}

export default Forms;