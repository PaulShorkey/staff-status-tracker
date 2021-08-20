import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

///FILE IMPORTS///
import FormDialog from './UpdateFormDialogue.js';
import SectionSummaryEntry from "./SectionSummariesEntry";
import AddSection from './AddNewSectionForm.js';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
      padding: ""
  }
});

export default function DenseTable() {

  const [summaryState, setSummaryState] = React.useState([])
  const [statusReady, setstatusReady] = React.useState(true)

  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:3001/section")
    .then(res => res.json())
    .then((data)=> {
      setSummaryState(data)
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
      <TableHead>
          <TableRow>
            <TableCell><AddSection /></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {
            statusReady ?
              summaryState.map((row, index) => {
                return <SectionSummaryEntry key={index} id={row.id} />
              }):  <div></div> 
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
