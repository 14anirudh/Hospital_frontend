import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div className="side">
      <ul className="hamburger-ul">
        <li className="hamburger-li">Home</li>
        <li className="hamburger-li">About Us</li>
        <li className="hamburger-li">Departments</li>
        <li className="hamburger-li">Contact Us</li>
        <Link to="/doc">
          <button className="hamburger-btn">SignIn as Doctor</button>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
