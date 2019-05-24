import React, { Component } from "react";
import {
  Button,
  Form,Modal,
  Header,
  Icon,
  Input,
  Container,
  Segment,
  Table,
  Menu,
  Image
} from "semantic-ui-react";
import { connect } from "react-redux";
import data from "../../data.json";

const getDepartment = item => {
  var department = data.department.filter(dep => dep.id == item.department_id);
  return department[0].name;
};

const FacList = () => {
  return data.faculties.map(item => (
    <Table.Row key={item.user_id}>
      <Table.Cell>{item.empid}</Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{getDepartment(item)}</Table.Cell>
      <Table.Cell>{item.designation}</Table.Cell>
      <Table.Cell>
        <Button size="mini" icon>
          <Icon name="pencil" />
        </Button>
        <Button color="red" size="mini" icon>
          <Icon name="delete" />
        </Button>
      </Table.Cell>
    </Table.Row>
  ));
};

const FacModal = () => {
  return (
    <div></div>
   )
}

class Faculties extends Component {
  render() {
    return (
      <Container className="paddingTop">
        <Segment>
        <Menu pointing>
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item position='right'>
            <Button  icon labelPosition="left" primary size="small">
    <Icon name="user" /> Add User
  </Button>
          </Menu.Item>
        </Menu>
          <Table compact celled>
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
              <FacList />
            </Table.Body>
          </Table>
        </Segment>
      </Container>
      
    );
  }
}

export default connect()(Faculties);
