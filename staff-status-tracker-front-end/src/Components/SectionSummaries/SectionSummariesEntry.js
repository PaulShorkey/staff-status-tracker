//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react';
import FadeMenu from './ChangeColorFadeTransition.js'
// import { makeStyles } from '@material-ui/core/styles';
import FormDialog from './UpdateFormDialogue.js'



export default function SectionSummaryEntry({index, id}) {
    //console.log('THIS IS THE ROW', row)
    const [rowState, setRowState] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/status/${id}`)
        .then(res => res.json())
        .then((data)=> {
          setRowState(data[0]);
          //console.log(data[0]);
        })
        .catch(err => console.log(err))
      }, [])

    
    return (
        <TableRow key={"rowOne"}>
            <TableCell component="th" scope="row" style={{width:'10%'}}>
                {rowState.section}
            </TableCell>
            <TableCell align="left" style={{width:'10%', backgroundColor: rowState.status}}> 
                <FadeMenu rowState={rowState} setRowState={setRowState} color={rowState.status} > 
                    Color 
                </FadeMenu> 
            </TableCell>
            <TableCell align="left" style={{width:'70%'}}>{rowState.section}</TableCell>
            <TableCell align="left" style={{width:'70%'}}> <FormDialog rowState={rowState} setRowState={setRowState}/></TableCell>
        </TableRow>
     )


}

