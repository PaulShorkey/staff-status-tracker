import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from '@material-ui/core/Drawer';
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import ItemList from "./ItemList/ItemList";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    width:'100%',
    maxWidth:360,
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
   }
});



  const updateStatus = (newStatus) => {
 
    //console.log(`Current Item ${currentItem.currentItem}`)
    //console.log(`Current Status ${taskState[currentItem.currentItem - 1].status}`);
    //itemObj[currentItem.currentItem - 1].status = newStatus;
    //console.log(`New Status ${newStatus}`);
    //let temp = [...taskState];
    //taskState[currentItem.currentItem - 1].status = newStatus;
    //console.log(taskState);
   // setTaskState({temp});
  }

  

  

export default function DrawerList() {
    const [state, setState] = React.useState({
    bottom: false,
    });
  const classes = useStyles();
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
    <div>
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {drawerList(anchor)}
          </Drawer>
    </div>
  );
}
