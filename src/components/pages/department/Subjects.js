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

class Subjects extends Component {
 
  render() {
    return [
      <Segment>
        <Header>Subjects 
          
        </Header>
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Code</Table.HeaderCell>
              <Table.HeaderCell>Subject  Name</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell >
                753159
              </Table.Cell>
              <Table.Cell >
                Data Structure and Algorithms
              </Table.Cell>
              <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell >
                456654
              </Table.Cell>
              <Table.Cell >
                Relational Database Management System
              </Table.Cell>
              <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
            </Table.Row>          
            <Table.Row>
              <Table.Cell >
                852258
              </Table.Cell>
              <Table.Cell >
                Operating System
              </Table.Cell>
              <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
            </Table.Row>          
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

export default connect()(Subjects);
