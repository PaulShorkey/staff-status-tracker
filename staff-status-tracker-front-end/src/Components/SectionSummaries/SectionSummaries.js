import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button'
// import FormDialog from './UpdateFormDialogue.js'
// import FadeMenu from './ChangeColorFadeTransition.js'
import SectionSummaryEntry from './SectionSummariesEntry.js'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
      padding: ""
  }
});

// const handleClick = (event, id, cell) => {
//   const { selected } = event.state;
//   const selectedCell = cell;
//   console.log('clicking')
//   event.setState({ selected: selectedCell });
// };

export default function DenseTable() {
  const classes = useStyles();

  // const [row, setRow] = useState(
  //   [
  //     {
  //       index: 1,
  //       shop: 's1',
  //       color: 'red',
  //       blurb: 'blurb1'
  //     },
  //     {
  //       index: 2,
  //       shop: 's2',
  //       color: 'yellow',
  //       blurb: 'blurb2'
  //     },
  //     {
  //       index: 3,
  //       shop: 's3',
  //       color: 'green',
  //       blurb: 'blurb3'
  //     }
  //   ]
  // )

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
