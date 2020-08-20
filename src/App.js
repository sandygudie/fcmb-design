import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <SideNavbar />
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
