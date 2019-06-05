import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {rows: []}
  }
  
  componentDidMount() {
    axios({
      url: 'https://i9x5u6sk1k.execute-api.us-east-1.amazonaws.com/dev/graphql',
      method: 'post',
      data: {
        query: `
          query {
            machines {
              instanceId
              groupName
            }
          }
        `
      }
    }).then((result) => {
      this.setState({rows: result.data.data.machines});
    }).catch(err => {
      console.log(err);
    });
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

