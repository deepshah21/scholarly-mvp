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
import { connect } from "react-redux";
import data from '../../../data.json';

const Pro = () => {
  return(
    data.programme.map(item => (
      <Table.Row key={item.id}>
    <Table.Cell >{item.department}</Table.Cell>
    <Table.Cell >{item.programme}</Table.Cell>
    <Table.Cell>
      <Button size="mini" icon><Icon name="pencil" /></Button>
      <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
      </Table.Cell>
  </Table.Row>
   )) 
  )
};

class Programme extends Component {
  
  render() {
    return [
      <Segment>
        <Header>Programme</Header>
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>Programme</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Pro/>
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan={5} />
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    ];
  }
}

export default connect()(Programme);
