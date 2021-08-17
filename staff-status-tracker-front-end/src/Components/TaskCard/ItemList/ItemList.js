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
import ItemListEntry from "./ItemListEntry";

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

export default function ItemList() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    bottom: false,
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

  const anchor = "bottom";
  return (
    <div>
      <ItemListEntry/>
    </div>
  );
}
