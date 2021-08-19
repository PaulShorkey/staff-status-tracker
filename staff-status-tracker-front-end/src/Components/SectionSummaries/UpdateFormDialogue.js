import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({setRowState, rowState}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRowState({...rowState, blurb: value})
  };

  const [value, setValue] = useState("") ;
  
  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Update      
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Type your update here and press update in the lower right to save
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Text Here"
            type="text"
            fullWidth
            inputProps={{ maxLength: 225 }} //no idea
            value={value}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}