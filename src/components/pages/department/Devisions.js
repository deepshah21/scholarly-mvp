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

class Devisions extends Component {
 
  render() {
    return [
      <Segment>
        <Header>Devisions 
          
        </Header>
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>Programme</Table.HeaderCell>
              <Table.HeaderCell>Devisions</Table.HeaderCell>
              <Table.HeaderCell>Mentors</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell >
                Mechanical  
              </Table.Cell>
              <Table.Cell >
                UG 
              </Table.Cell>
              <Table.Cell >
                First Year
              </Table.Cell>
              <Table.Cell >
                Gayatri Shah
              </Table.Cell>
              <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell >
                Mechanical  
              </Table.Cell>
              <Table.Cell >
                UG 
              </Table.Cell>
              <Table.Cell >
                Second Year
              </Table.Cell>
              <Table.Cell >
                Jinash Mandora
              </Table.Cell>
              <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
            </Table.Row>          </Table.Body>

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

export default connect()(Devisions);
