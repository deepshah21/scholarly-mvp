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

const SubsList = () => {
    return(
      data.subjects.map(item => (
        <Table.Row key={item.code}> 
             <Table.Cell >{item.code}</Table.Cell>
             <Table.Cell >{item.name}</Table.Cell>
             <Table.Cell>
                <Button size="mini" icon><Icon name="pencil" /></Button>
                <Button  color="red" size="mini" icon><Icon name="delete" /></Button>
                </Table.Cell>
        </Table.Row>
      ))
    )
  } 


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
            <SubsList/>
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
