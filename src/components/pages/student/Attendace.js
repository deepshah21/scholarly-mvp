import React,{Component} from "react";
import { Dropdown, Table } from 'semantic-ui-react';
import data from '../../../data.json';


class Attendance extends Component {
  state = {
    slectedSemester : 2,
    attendanceData : [],
    semesterOptions : []
  }
  componentDidMount() {
    let semesterOptions = data.semesterList.map(
      semester => ({
      key: semester.id,
      text: semester.name,
      value: semester.id,
    }));
    this.setState( {semesterOptions : semesterOptions} );
  }
  render() {
    const { slectedSemester, attendanceData, semesterOptions } = this.state
    return (
      <div>
        <span>Select Semester : </span>
      <Dropdown placeholder='Select Semester' search selection 
      options={semesterOptions} onChange={this.getAttendance} value={slectedSemester}>
      </Dropdown>
      <Table compact celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Subject </Table.HeaderCell>
                <Table.HeaderCell>Your Attendance</Table.HeaderCell>
                <Table.HeaderCell>Total Attendance</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            {attendanceData.map(attendance => 
              <Table.Row key={attendance.id}>
              <Table.Cell>{attendance.subjectName}</Table.Cell>
              <Table.Cell>{attendance.currentAttendance}</Table.Cell>
              <Table.Cell>{attendance.totalAttendance}</Table.Cell>
            </Table.Row>
            
            )}
            </Table.Body>
          </Table>
      </div>
    );
  }

  getAttendance = (e, { value }) => {
    this.setState({ slectedSemester : value });
    let attendance = this.getAttendanceData(value);
    this.setState({ attendanceData : attendance });
    console.log(this.state.attendanceData)
  }

  getAttendanceData = slectedSemester => {
    debugger;
    let attendance = data.attendanceList.filter(attendanceObj => attendanceObj.semId == slectedSemester);
    return attendance;
  };
}


export default Attendance;