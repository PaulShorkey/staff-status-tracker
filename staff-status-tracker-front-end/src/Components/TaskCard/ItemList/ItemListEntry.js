import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import DrawerList from "../DrawerList";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
       }
  }));


export default function ItemListEntry() {


      const classes = useStyles();

    //const [currentItem, setCurrentItem] = React.useState("")

    // const toggleDrawer = (anchor, open, itemId) => (event) => {
    //   if (
    //     event.type === "keydown" &&
    //     (event.key === "Tab" || event.key === "Shift")
    //   ) {
    //     return;
    //   }
      
    //   setCurrentItem({ currentItem : itemId});
    //   setState({ ...state, [anchor]: open });
    // };

    const [taskState, setTaskState] = React.useState([
        { 
          id: "1",
          task: "Do a thing 1",
          status: 'Red'
        },
        { 
          id: "2",
          task: "Do a thing 2",
          status: 'Green'
        },
        { 
          id:'3',
          task: "Do a thing 3",
          status: 'Red'
        },
      ])

    return (
        <div>
            {taskState.map((item, index) => (
                <React.Fragment key={index}>
                    <ListItemText >{item.task} : <FiberManualRecordIcon style={{ color: item.status }} className={classes.wrapIcon}/> </ListItemText>
                </React.Fragment>
          ))}
        </div>
    )
  }



//   {taskState.map((item, index) => (
//     <React.Fragment key={index}>
//         <ListItemText onClick={toggleDrawer(anchor, true, item.id)}>{item.task} : <FiberManualRecordIcon style={{ color: item.status }} className={classes.wrapIcon}/> </ListItemText>
//     </React.Fragment>
// ))}