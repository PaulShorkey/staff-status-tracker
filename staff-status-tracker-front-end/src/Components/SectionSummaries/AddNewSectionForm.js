import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';import AlarmIcon from '@material-ui/icons/Alarm';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function AddSection() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [section, setSection] = React.useState('');
  const [color, setColor] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
    console.log('clicking add button')
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
      setOpen(false)
  };

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const handleFormClose = () => {
    setOpen(false);
  };

  const handleFormOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <IconButton aria-label="add" size="small " onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Section</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new seciton, fill out the information here and click 'add'
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
          />
          <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Color</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    // open={open}
                    onClose={handleFormClose}
                    onOpen={handleFormOpen}
                    value={color}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Green</MenuItem>
                    <MenuItem value={20}>Yellow</MenuItem>
                    <MenuItem value={30}>Red</MenuItem>
                </Select>
            </FormControl>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}