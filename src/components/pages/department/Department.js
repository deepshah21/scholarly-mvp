import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Segment,
  Table
} from "semantic-ui-react";
import data from '../../../data.json';

  
const DepsList = () => {
    return(
      data.department.map(item => (
        <Table.Row key={item.id}> 
             <Table.Cell >{item.name}</Table.Cell>
             <Table.Cell >{item.description}</Table.Cell>
             <Table.Cell >{item.hod}</Table.Cell>
             <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
        </Table.Row>
      ))
    )
  } 

const Department = () =>{

    return (
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
         <DepsList/>
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan={5} />
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    );
    
  }


export default Department;
