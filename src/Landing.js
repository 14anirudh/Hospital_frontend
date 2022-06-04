import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Landing.css";
import Sidebar from "./Sidebar";

import { Divide as Hamburger } from "hamburger-react";

function Landing() {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="navbar-parent">
      <div className="navbar">
        <Link to="/">
          <img src={Logo} alt="" className="navbar-logo" />
        </Link>

        <ul className="navbar-ul">
          <li className="navbar-li">Home</li>
          <li className="navbar-li">About Us</li>
          <li className="navbar-li">Departments</li>
          <li className="navbar-li">Contact Us</li>
          <Link to="/doc">
            <button className="navbar-btn">SignIn as Doctor</button>
          </Link>
        </ul>
        <div className="hamburger" onClick={()=>setOpen(!open)}>
          <Hamburger/>
        </div>
       
      </div>
     {open && <Sidebar />} 
      <p className="appointment-statement">Tell Us Your Problem</p>
      <Link to="/booking">
        <button className="appointment-btn">Make an Appointment </button>
      </Link>
    </div>
  );
}

export default Landing;
