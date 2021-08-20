import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function DeleteButton({rowState, setRowState}) {
  const classes = useStyles();

  const handleClick= () => {    
    const requestOptions = {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
    };
      console.log('CLICKING DELETE BUTTON')
      fetch(`http://localhost:3001/section/${rowState.id}`, requestOptions)
            .then(response => response.json())
            .then(window.location.reload())
  };

  return (
    <div className={classes.root}>
      <IconButton aria-label="delete" onClick={handleClick}>
        <DeleteIcon />
      </IconButton>
      
    </div>
  );
}