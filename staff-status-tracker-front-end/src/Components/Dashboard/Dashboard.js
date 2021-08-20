import React, { useState, useEffect } from 'react'
import { 
    Card, 
    Grid,
    Paper,
    Button,
    Container
} from '@material-ui/core'

// FILE IMPORTS//
import TaskCard from '../TaskCard/TaskCard.js'
import {makeStyles} from '@material-ui/core'
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles((theme) => ({
    root: {
      borderRadius: 6,
      flexGrow: 1,      
    },
    taskCard: {
      padding: theme.spacing(2000),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    centerGrid: {
      direction: "row",
      
    }
  }));

export default function Dashboard () {
    const [cardState, setCardState] = React.useState([])

    const classes = useStyles();

    useEffect(() => {
      fetch("http://localhost:3001/card")
      .then(res => res.json())
      .then((data)=> {
        setCardState(data)
      })
      .catch(err => console.log(err))
    }, [])

    console.log('THIS IS CARD STATE', cardState)
    
    return (
        <Container >
          
           <Grid container  spacing={5} direction='row' justifyContent = "center">
           {/* <Button variant='contained' color='primary' fullWidth={true}>Add Task Card</Button> */}

           {/* {cardState.map(card => {
             return <cardState>
           })} */}

           
                {/* <Grid item>
                  <Paper><TaskCard /></Paper>
                </Grid>
                <Grid item >
                  <Paper><TaskCard /></Paper>
                </Grid>
                <Grid item >
                  <Paper><TaskCard /></Paper>
                </Grid> */}
               
          </Grid>
        </Container>
       
    )
}




// direction="column"
//                   alignItems="center"
//                   justify="center"



// class Dashboard extends React.Component {
//     state = {
//       tasks: [
//         {
//           name: "Add More Tasks",
//           category: "todo"
//         }
//       ]
//     };
  
//     onDragOver = ev => {
//       ev.preventDefault();
//     };
  
//     onDragStart = (ev, name) => {
//       ev.dataTransfer.setData("id", name);
//     };
  
//     onDrop = (ev, cat) => {
//       const id = ev.dataTransfer.getData("id");
  
//       let tasks = this.state.tasks.filter(task => {
//         if (task.name == id) {
//           task.category = cat;
//         }
//         return task;
//       });
//       this.setState({
//         ...this.state,
//         tasks
//       });
//     };
  
//     handleKeyPress = ev => {
//       if ((ev.key == "Enter") && (ev.target.value != "")) {
//         this.setState({
//           tasks: [
//             ...this.state.tasks,
//             { name: ev.target.value, category: "todo" }
//           ]
//         });
//         ev.target.value = " ";
//       }
//     };
  
//     render() {
//       var tasks = {
//         todo: [],
//         working: [],
//         complete: [],
//         trash: []
//       };
  
//       this.state.tasks.forEach(t => {
//         tasks[t.category].push(
//           <div
//             className="item-container"
//             key={t.name}
//             draggable
//             onDragStart={e => this.onDragStart(e, t.name)}
//           >
//             {t.name}
//           </div>
//         );
//       });
      
      
  
//       return (
//         <div>
//           {/* <div id='background-image'></div> */}
//           <div class="container">
//             <div
//               className="drop-area"
//               onDragOver={e => this.onDragOver(e)}
//               onDrop={e => this.onDrop(e, "todo")}
//             >
//               <h1>Todo</h1>
//               {tasks.todo}
//             </div>
//             <div
//               className="drop-area"
//               onDragOver={e => this.onDragOver(e)}
//               onDrop={e => this.onDrop(e, "Foreign_Activities")}
//             >
//               <h1>Foreign Activites</h1>
//               {tasks.working}
//             </div>
//             <div
//               className="drop-area"
//               onDragOver={e => this.onDragOver(e)}
//               onDrop={e => this.onDrop(e, "complete")}
//             >
//               <h1>Complete</h1>
//               {tasks.complete}
//             </div>
//           </div>
//           <div>
//             <input
//               onKeyPress={e => this.handleKeyPress(e)}
//               className="input"
//               type="text"
//               placeholder="Task Name"
//             />
  
//             <div
//               class="trash-drop"
//               onDrop={e => this.onDrop(e, "trash")}
//               onDragOver={e => this.onDragOver(e)}
//             >
//               Drop here to remove
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  


// export default Dashboard;  







// // import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Paper from '@material-ui/core/Paper';
// // import Grid from '@material-ui/core/Grid';

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     flexGrow: 1,
// //   },
// //   paper: {
// //     padding: theme.spacing(1),
// //     textAlign: 'center',
// //     color: theme.palette.text.secondary,
// //   },
// // }));

// // export default function NestedGrid() {
// //   const classes = useStyles();

// //   function FormRow() {
// //     return (
// //       <React.Fragment>
// //         <Grid item xl={4}>
// //           <Paper className={classes.paper}>item</Paper>
// //         </Grid>
// //         <Grid item xl={4}>
// //           <Paper className={classes.paper}>item</Paper>
// //         </Grid>
// //         <Grid item xl={4}>
// //           <Paper className={classes.paper}>item</Paper>
// //         </Grid>
// //       </React.Fragment>
// //     );
// //   }

// //   return (
// //     <div className={classes.root}>
// //       <Grid container spacing={1}>
// //         <Grid container item xl={12} spacing={3}>
// //           <FormRow />
// //         </Grid>
// //       </Grid>
// //     </div>
// //   );
// // }