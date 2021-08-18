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

const itemObj = [
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
]

export default function ItemList() {
  const classes = useStyles();

  const itemList = itemObj.map((item, index) => {
    console.log(item)
    return (
      <React.Fragment key={index}>
        <ItemListEntry item={item}/>                
      </React.Fragment>
    )
  })


  return (
    <div>
      {itemList}
    </div>
  );
}
