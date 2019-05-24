import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Message,
  Segment,Container,
  Table
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/Departments";
import { connect } from "react-redux";
import Forms from './Forms';
import Department from './department/Department'
import Programme from './department/Programme';
import Devisions from './department/Devisions';
import Subjects from './department/Subjects';
import DevSub from './department/DevSub';

class Departments extends Component {
 
  render() {
    return ([
      <Container className="paddingTop">
      <Department/>
      <Programme/>
      <Devisions/>
      <Subjects/>
      <DevSub/>
      <Forms/>
      </Container>
    ]
    );
    
  }
}

export default connect()(Departments);
