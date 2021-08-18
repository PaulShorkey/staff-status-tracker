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
import DrawerList from "../DrawerList";
import { Drawer } from "@material-ui/core";

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


export default function ItemListEntry({item}) {


  const classes = useStyles();
  const [currentItem, setCurrentItem] = React.useState("")
  const [itemState, setItemState] = React.useState(item)

  

  const [state, setState] = React.useState({
    bottom: false,
    });
  const anchor = "bottom";


  const toggleDrawer = (anchor, open, itemId) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    
    //setCurrentItem({ currentItem : itemId});
    setState({ ...state, [anchor]: open });
  };

  const updateStatus = (newStatus) => {

    //console.log("Hello World")
 
    //console.log(`Current state ${itemState.item.status}`)
    //console.log(`Current Status ${taskState[currentItem.currentItem - 1].status}`);
    //itemObj[currentItem.currentItem - 1].status = newStatus;
    //console.log(`New Status ${newStatus}`);
    //let temp = [...taskState];
    //taskState[currentItem.currentItem - 1].status = newStatus;
    //console.log(taskState);
    //let temp = {...itemState};
    //temp.item.status = newStatus;
    // console.log(temp)
    setItemState({...itemState, status: newStatus});
  }



  const drawerList = (item) => (

    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button key={'Expected'} onClick={() => updateStatus("Green")}>
            <ListItemIcon>
              {<FiberManualRecordIcon style={{ color: 'Green' }} className={classes.wrapIcon}/> }
            </ListItemIcon>
            <ListItemText primary='Expected' />
          </ListItem>
          <ListItem button key={'Abnormal'} onClick={() => updateStatus("Yellow")}>
            <ListItemIcon>
              {<FiberManualRecordIcon style={{ color: 'Yellow' }} className={classes.wrapIcon}/> }
            </ListItemIcon>
            <ListItemText primary='Abnormal' />
          </ListItem>
          <ListItem button key={'Action Required'} onClick={() => updateStatus("Red")}>
            <ListItemIcon>
              {<FiberManualRecordIcon style={{ color: 'Red' }} className={classes.wrapIcon}/> }
            </ListItemIcon>
            <ListItemText primary='Action Required' />
          </ListItem>
      </List>
    </div>
  );






    return (
      <>
        <div>
            <ListItemText onClick={toggleDrawer(anchor, true, itemState.id)}>{itemState.task} : <FiberManualRecordIcon style={{ color: itemState.status }} className={classes.wrapIcon}/> </ListItemText>
        </div>
        <div>
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {drawerList(anchor)}
          </Drawer>
      </div>
    </>
    )
  }



