import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import InputBase from '@material-ui/core/InputBase';
import { /*alpha,*/ makeStyles } from '@material-ui/core/styles';
//import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
import logo from './seal.svg';
// import { NavLink as Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(1),
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inputRoot: {
  //   color: 'inherit',
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     width: '12ch',
  //     '&:focus': {
  //       width: '20ch',
  //     },
  //   },
  // },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root} display="flex" alignitems="center" justifycontent="center">
      <AppBar position="static">
        <Toolbar>
          
        <h1>Battle</h1> <img src={logo} className="logo" alt="logo" align-items="center" width='400px' height='200px' /> <h1>Tracker</h1>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

