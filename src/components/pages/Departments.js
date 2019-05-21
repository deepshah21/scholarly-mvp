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
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/Departments";
import { connect } from "react-redux";
import Forms from './Forms';
import Programme from './department/Programme';
import Devisions from './department/Devisions';
import Subjects from './department/Subjects';
import DevSub from './department/DevSub';

class Departments extends Component {
 
  render() {
    return ([
      <Segment>
        <Header>Departments</Header>
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>hod name</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell >
                Mechanical  
              </Table.Cell>
              <Table.Cell >
                Mechanical engineering 
              </Table.Cell>
              <Table.Cell >
                Ravi Kishan
              </Table.Cell>
              <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell >
                Electronics
              </Table.Cell>
              <Table.Cell >
                Electronics engineering 
              </Table.Cell>
              <Table.Cell >
                Nayan Shah
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
      </Segment>,
      <Programme/>,
      <Devisions/>,
      <Subjects/>,
      <DevSub/>,
      <Forms/>,
      
    ]
    );
    
  }
}

export default connect()(Departments);
