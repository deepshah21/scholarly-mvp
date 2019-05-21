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
        <Header>Bind Subject with Department, Programme and Devision 
          
        </Header>
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>Programme</Table.HeaderCell>
              <Table.HeaderCell>Devision</Table.HeaderCell>
              <Table.HeaderCell>Code</Table.HeaderCell>
              <Table.HeaderCell>Subject  Name</Table.HeaderCell>
              <Table.HeaderCell>Faculty</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell >
                Information & Technology
              </Table.Cell>
              <Table.Cell >
                UG
              </Table.Cell>
              <Table.Cell >
                First Year
              </Table.Cell>
              <Table.Cell >
                753159
              </Table.Cell>
              <Table.Cell >
              Data Structure and Algorithms
              </Table.Cell>
              <Table.Cell >
              Piyush Dhamecha
              </Table.Cell>

              <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell >
                Information & Technology
              </Table.Cell>
              <Table.Cell >
                UG
              </Table.Cell>
              <Table.Cell >
                First Year
              </Table.Cell>
              <Table.Cell >
              852258
              </Table.Cell>
              <Table.Cell >
              Operating Systems
              </Table.Cell>
              <Table.Cell >
                Jinash Mandora
              </Table.Cell>
              <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
            </Table.Row>          
            <Table.Row>
             
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
