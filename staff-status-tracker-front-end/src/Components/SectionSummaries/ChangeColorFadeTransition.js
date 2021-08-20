import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu({setRowState, rowState}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (color) => {
    console.log(color)
    setAnchorEl(null);
    //setRowState({...rowState, color: color.target.textContent})
    
  
    const requestOptions = {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "section": rowState.section,
          "status": color,
          "poc": rowState.poc,
          "description": rowState.description
          })
    };
      
      fetch(`http://localhost:3001/section/${rowState.id}`, requestOptions)
            .then(response => response.json())
            .then(window.location.reload())
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} style={{color: rowState.color}}>
        Change
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        <MenuItem id='change-green' onClick={() => handleClose("Green")}>Green</MenuItem>
        <MenuItem id='change-yellow' onClick={() => handleClose("Yellow")}>Yellow</MenuItem>
        <MenuItem id='change-red' onClick={() => handleClose("Red")}>Red</MenuItem>
      </Menu>
    </div>
  );
}

//onClick={() => updateStatus("Yellow")}