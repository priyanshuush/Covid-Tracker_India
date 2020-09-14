import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: '50%',
    margin: '0 auto'
  },
});

const styles = {
    'textDecoration': 'none',
     'color': 'blue'
}

function createData(state, confirmed, deaths, recovered) {
  return { state, confirmed, deaths, recovered };
}


export default function SimpleTable() {
  const classes = useStyles();

  const [states,setStates] = useState([{}]);
  
  const stateArray = [];

const stateData = () => {

  fetch('https://api.covidindiatracker.com/state_data.json')
  .then(res => res.json())
  .then(result => {
      result.map(data => {
          stateArray.push({
              state: data.state,
              confirmed: data.confirmed,
              deaths: data.deaths,
              recovered: data.recovered
          })
      })
      setStates(stateArray)
  })
}

  useEffect(() => {
      stateData();
  },[])

  
  const rows = [];
    states.map(data => {
        const val =  createData(data.state,data.confirmed,data.deaths,data.recovered)
        rows.push(val)
    })
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell  align="left">State</TableCell>
            <TableCell align="center">Confirmed Cases</TableCell>
            <TableCell  align="center">Deaths</TableCell>
            <TableCell  align="center">Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.state+row.confirmed}>
              <TableCell  align="left">
                      <a style={styles} href={`/Covid-Tracker_India/#/${row.state}`}>
                        {row.state}
                      </a>
              </TableCell>
              <TableCell align="center"> {row.confirmed} </TableCell>
              <TableCell align="center"> {row.deaths} </TableCell>
              <TableCell align="center"> {row.recovered} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}