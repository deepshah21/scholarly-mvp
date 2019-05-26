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
  Menu, Select,Divider,
  Image,Card,Message,Grid
} from "semantic-ui-react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
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



class Students extends Component {

  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleChange = () => {
    //newValue: any, actionMeta: any
    // console.group('Value Changed');
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };
  
  render() {
    const { activeItem } = this.state
    return (
      <Container className="paddingTop">
        <Segment>
          <Menu pointing>
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Select placeholder='Search By' options={data.StudentFilterOption} />
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
    
          <Message header='General Information!'/>
          
          <Form.Group widths={3}>
              <Form.Input label='User ID' placeholder='User Id' value="1234" />
              <Form.Input label='Enrollment Id' placeholder='Enrollment Id' value="110010116028" />
              <Form.Input label='Email' placeholder='Email' value="eliot@gmail.com"/>
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Input label='First name' placeholder='First name' value="Eliot"/>
              <Form.Input label='Middle name' placeholder='Middle name' value="M."/>
              <Form.Input label='Last name' placeholder='Last name' value="Baker"/>
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label='Address' placeholder='Address' value="Karamsad"/>
              <Form.Input label='Phone' placeholder='Phone' value="9825851084"/>
            </Form.Group>

            <Form.Group widths={3}>
              <Form.Input label='Gender' placeholder='Gender' value="Male"/>
              <Form.Input label='DOB' placeholder='DOB' value="21-12-1993"/>
              <Form.Input label='Category' placeholder='Category' value="General"/>
            </Form.Group>

            {/* <Divider horizontal > Parent Informantion</Divider> */}
            <Message header='Parent Informantion!'/>

            <Form.Group widths={2}>
              <Form.Input label='Father Full Name' placeholder='Father Full Name' />
              <Form.Input label='Mother Full Name' placeholder='Mother Full Name' />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label='Parent Number' placeholder='Parent Number' />
              <Form.Input label='Parent Address' placeholder='Parent Address' />
            </Form.Group>
        </Form>

        <Message header='Academic Information'/>
        <Grid>
        <Grid.Column width={3}>
          <Menu pointing vertical>
            <Menu.Item name='Results' active={activeItem === 'Results'} onClick={this.handleItemClick} />
            <Menu.Item name='Attendance' active={activeItem === 'Attendance'} onClick={this.handleItemClick} />
            <Menu.Item name='Assignment' active={activeItem === 'Assignment'} onClick={this.handleItemClick} />
            <Menu.Item name='Library' active={activeItem === 'Library'} onClick={this.handleItemClick} />
            <Menu.Item name='Interested Areas' active={activeItem === 'Interested Areas'} onClick={this.handleItemClick} />
            <Menu.Item name='Projects' active={activeItem === 'Projects'} onClick={this.handleItemClick} />
            <Menu.Item name='Activity' active={activeItem === 'Activity'} onClick={this.handleItemClick} />
            <Menu.Item name='Event Seminar' active={activeItem === 'Event Seminar'} onClick={this.handleItemClick} />
            <Menu.Item name='Accounts Fees' active={activeItem === 'Accounts Fees'} onClick={this.handleItemClick} />
            <Menu.Item name='Transport' active={activeItem === 'Transport'} onClick={this.handleItemClick} />
            <Menu.Item name='Comments' active={activeItem === 'Comments'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={13}>
          <Segment >
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>   


        </Segment>

      </Container>

    );
  }
}

export default connect()(Students);
