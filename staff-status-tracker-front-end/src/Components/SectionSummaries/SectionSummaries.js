import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import FormDialog from './UpdateFormDialogue.js'
import SectionSummaryEntry from "./SectionSummariesEntry"
const knex = require('knex')(require('../../knexfile.js')[process.env.NODE_ENV]);



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

export default function DenseTable() {

  let test = knex.select("*")
  .from('"section-status"')
  .then(data =>
    console.log(data))



  const classes = useStyles();


  const row = [
    {
      index: 1,
      shop: 's1',
      color: 'red',
      blurb: 'blurb1'
    },
    {
      index: 2,
      shop: 's2',
      color: 'yellow',
      blurb: 'blurb2'
    },
    {
      index: 3,
      shop: 's3',
      color: 'green',
      blurb: 'blurb3'
    }
  ]

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableBody>
          {row.map((row, index) => {
            return <SectionSummaryEntry key={row.index} row={row} />
          })}

          {/* <SectionSummaryEntry row={row} setRow={setRow}/> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
