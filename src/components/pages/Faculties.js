import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Container,
  Segment,
  Table,Menu
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/Departments";
import { connect } from "react-redux";
import Forms from './Forms';
import Programme from './department/Programme';
import Devisions from './department/Devisions';
import Subjects from './department/Subjects';
import DevSub from './department/DevSub';


class Faculties extends Component {
    
  render() {
    return (
      <Container className="top-pading">
          <Segment>
<Menu.Item >
          <Input icon="search" placeholder="Search..."/>
          <Button icon labelPosition='left' primary size='small'>
            <Icon name='user' /> Add User
          </Button>
          
        </Menu.Item>

          <Table compact celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>  
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Department</Table.HeaderCell>
        <Table.HeaderCell>Designation</Table.HeaderCell>
        <Table.HeaderCell>Edit</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
      <Table.HeaderCell>456</Table.HeaderCell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>Information and Technology</Table.Cell>
        <Table.Cell>Jr. Assistant Proffesor</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Segment>
       </Container>
    );
    
  }
}

export default connect()(Faculties);
