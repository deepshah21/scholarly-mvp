import React, { Component } from "react";
import {
  Button,
  Form, Modal,
  Header,
  Icon,
  Input,
  Container,
  Segment,
  Table,
  Menu, Select,
  Image,Card
} from "semantic-ui-react";
import { connect } from "react-redux";
import CreatableSelect from 'react-select/lib/Creatable';
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

  handleChange = () => {
    //newValue: any, actionMeta: any
    // console.group('Value Changed');
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };
  
  render() {
    return (
      <Container className="paddingTop">
        <Segment>
          <Menu pointing>
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Select placeholder='Search By' options={data.facultiesFilterOption} />
            </Menu.Item>
            <Menu.Item position='right'>
              <Button icon labelPosition="left" primary size="small">
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

        <Segment>
          <Form>
      
          <Card
    image='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
    header='Elliot Baker'  />
    
          <Form.Group widths={3}>
              <Form.Input label='User ID' placeholder='User Id' />
              <Form.Input label='Emp Id' placeholder='Employee Id' />
              <Form.Input label='email' placeholder='email' />
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Input label='First name' placeholder='First name' />
              <Form.Input label='Middle name' placeholder='Middle name' />
              <Form.Input label='Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label='Address' placeholder='Address' />
              <Form.Input label='Phone' placeholder='Phone' />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label='Experience' placeholder='Experience' />
              <Form.Input label='Designation' placeholder='Designation' />
            </Form.Group>
            <Form.Group widths={2}>
            <div className="field">
            <label>Qualification</label>
              <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={data.facultiesQualifications}
                />
            </div>
            <div className="field">
            <label>Publication</label>
              <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={data.facultiesPublications}
                />
            </div>
            </Form.Group>
            <Form.Group widths={2}>
            <div className="field">
            <label>Memberships</label>
              <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={data.facultiesMembership}
                />
            </div>
            <div className="field">
            <label>Projects</label>
              <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={data.facultiesProjects}
                />
            </div>
            </Form.Group>
            <Form.Group widths={2}>
            <div className="field">
            <label>Interested Area</label>
              <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={data.interestedArea}
                />
            </div>

              <Form.Input label='Joining Date' placeholder='Joining Date' />
            </Form.Group>

            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>

      </Container>

    );
  }
}

export default connect()(Faculties);
