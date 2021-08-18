//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FadeMenu from './ChangeColorFadeTransition.js'
// import { makeStyles } from '@material-ui/core/styles';
import FormDialog from './UpdateFormDialogue.js'



// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//     tableCell: {
//         padding: ""
//     }
//   });

export default function SectionSummaryEntry({row, setRow}) {



    
    return (
        <TableRow key={"rowOne"}>
            <TableCell component="th" scope="row" style={{width:'10%'}}>
                {row.shop}
            </TableCell>
            <TableCell align="left" style={{width:'10%', backgroundColor: row.color}}> 
                <FadeMenu row={row} setRow={setRow} color={row.color} > 
                    Color 
                </FadeMenu> 
            </TableCell>
            <TableCell align="left" style={{width:'70%'}}>{row.blurb}</TableCell>
            <TableCell align="left" style={{width:'70%'}}> <FormDialog row={row} setRow={setRow}/></TableCell>
        </TableRow>
     )
}





/* <TableRow key={"rowOne"}>
            <TableCell component="th" scope="row" style={{width:'10%'}}>
            {shop}
            </TableCell>
            <TableCell align="left" style={{width:'10%', backgroundColor:color}}> 
            <FadeMenu setRow={setRowOne} rowOne={rowOne}> 
                Color 
            </FadeMenu> 
            </TableCell>
            <TableCell align="left" style={{width:'70%'}}>{blurb}</TableCell>
            <TableCell align="left" style={{width:'70%'}}> <FormDialog onClose={() => console.log('pot')} rowOne = {rowOne} setRow={setRowOne}/></TableCell>
        </TableRow> */