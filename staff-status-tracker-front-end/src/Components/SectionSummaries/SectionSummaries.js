import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import FormDialog from './UpdateFormDialogue.js'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
      padding: ""
  }
});

function createData(section, status, comments) {
  return { section, status, comments };
}

const rows = [
  createData('S1', 'Green', 'All of the people are ready'),
  createData('S2', 'Yellow', 'No intelegence, we werent able to find anything lkjhlkjhlkjhlkjlkjhlkjhlkjhlkjlkjhkllkjhlkjhlkjhlkjljh lkjhljkh jhlkjhlkjlkjhlkjlkjhlkjhlkjlkjhlkjhlkjhlkjhlkjhlkjhlkjhlklkjhklhlkjhlkjhlklkjlkjhlkjhlkjhlkjhkljhlkjhlkjhklhlkjhlkjh'),
  createData('S3', 'Red', 'We should use MDMP')
];

//  const handleUpdateButtonClick = (event) =>{
//    setText(event.target.value);
//  }
 
export default function DenseTable() {
  const classes = useStyles();
  
  const [rowOne, setColorS1] = useState(['S1','green', 'blurb3']);
  const [rowTwo, setColorS2] = useState(['S2', 'yellow', 'blurb2']);
  const [rowThree, setColorS3] = useState(['S3', 'red', 'blurb3']);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        {/* <TableHead>
          <TableRow>
            <TableCell >Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableC90ell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {/* {rows.map((row) => ( */}
            <TableRow key={"rowOne"}>
              <TableCell component="th" scope="row" style={{width:'10%'}}>
                {rowOne[0]}
              </TableCell>
              <TableCell align="left" style={{width:'10%', backgroundColor:rowOne[1]}}> </TableCell>
              <TableCell align="left" style={{width:'70%'}}>{rowOne[2]}</TableCell>
              <TableCell align="left" style={{width:'70%'}}> <FormDialog /></TableCell>
            </TableRow>
            <TableRow key={"rowTwo"}>
              <TableCell component="th" scope="row" style={{width:'10%'}}>
                {rowTwo[0]}
              </TableCell>
              <TableCell align="left" style={{width:'10%', backgroundColor:rowTwo[1]}}></TableCell>
              <TableCell align="left" style={{width:'70%'}}>{rowTwo[2]}</TableCell>
              <TableCell align="left" style={{width:'70%'}}> <FormDialog /></TableCell>
            </TableRow>
            <TableRow key={"rowThree"}>
              <TableCell component="th" scope="row" style={{width:'10%'}}>
                {rowThree[0]}
              </TableCell>
              <TableCell align="left" style={{width:'10%', backgroundColor:rowThree[1]}}></TableCell>
              <TableCell align="left" style={{width:'70%'}}>{rowThree[2]}</TableCell>
              <TableCell align="left" style={{width:'70%'}}> <FormDialog /></TableCell>
            </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
