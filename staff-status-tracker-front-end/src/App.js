import logo from "./logo.svg";
import React from "react";
import "./App.css";
import TaskCard from "./Components/TaskCard/TaskCard.js";
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch
// } from 'react-router-dom';

// FILE IMPORTS//
// import Navbar from './Components/Navbar/Navbar.js';
// import Dashboard from './Components/Dashboard/Dashboard.js';

function App() {
  return (
    <h1>
      <TaskCard />
    </h1>
  );
}

export default App;
