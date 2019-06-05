import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {rows: [{
      "instanceId": "instance1_1",
      "groupName": "api"
    },
    {
      "instanceId": "instance2_2",
      "groupName": "api"
    },
    {
      "instanceId": "instance3_3",
      "groupName": "api"
    },
    {
      "instanceId": "instance4_4",
      "groupName": "api"
    },
    {
      "instanceId": "instance5_5",
      "groupName": "api"
    }]}
  }
  
  render(){
    const {rows}  = this.state;
    return(
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>InstancesId</TableCell>
            <TableCell align="right">GroupName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.instanceId}>
              <TableCell component="th" scope="row">
                {row.instanceId}
              </TableCell>
              <TableCell align="right">{row.groupName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    ) 
  }
}

export default App;

