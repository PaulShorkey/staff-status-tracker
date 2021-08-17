import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import Card from "@material-ui/core/Card"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 620,
    backgroundColor: theme.palette.background.dark //rgb(35, 46, 51); #f5f5f5
  },
}));

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    // align-items: center
  };

export default function Legend() {
  const classes = useStyles();

  return (
    <center><Card className={classes.root}>
      <List component="nav" style={flexContainer}>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon style={{ color: "green" }}/>
          </ListItemIcon>
          <ListItemText primary="Expected" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon style={{ color: "yellow" }} />
          </ListItemIcon>
          <ListItemText primary="Abnormal" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon style={{ color: "red" }}/>
          </ListItemIcon>
          <ListItemText primary="Action Required" />
        </ListItem>
      </List>
      
    </Card></center>
  );
}