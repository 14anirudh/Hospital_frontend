import React from "react";
import one from "./4.png";
import two from "./5.png";
import three from "./6.png";
import four from "./7.png";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./patient.css";

function Patient() {
  return (
    <div className="p-main">
      <Link to="/">
        <img src={Logo} alt="" className="form-logo" />
      </Link>
      <h1 className="h">Today's Patients for you</h1>
      <div className="patient">
        <div className="statement">
          <Link to="/history">
            <img src={one} alt="" className="p-img" />
          </Link>
          <p>Name:Rishi Dhawan</p>
        </div>
        <div className="statement">
          <Link to="/history">
            <img src={two} alt="" className="p-img" />
          </Link>
          <p>Name:Eesha Singh</p>
        </div>
        <div className="statement">
          <Link to="/history">
            <img src={three} alt="" className="p-img" />
          </Link>
          <p>Name:Fredrik D'costa</p>
        </div>
        <div className="statement">
          <Link to="/">
            <img src={four} alt="" className="p-img" />
          </Link>
          <p>Name:Parag Hussain</p>
        </div>
      </div>
    </div>
  );
}

export default Patient;
