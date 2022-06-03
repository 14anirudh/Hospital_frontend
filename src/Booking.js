import React from "react";
import Home from "./home.png";
import Lab from "./lab.png";
import Checkup from "./checkup.png";
import "./Booking.css";
import{Link} from 'react-router-dom';
import Logo from "./logo.png";

function Booking() {
  return (
    <div className="booking-parent">
         <Link to="/">
          <img src={Logo} alt="" className="booking-logo" />
        </Link>
      <div className="information">
        <h2>Schedule Your Appointment Online</h2>
        <p>Get 10% discount on all In-Hospital appointments</p>
      </div>
      <div className="functionality">
        <input
          type="text"
          className="field"
          placeholder="search for a doctor or speciality"
        />
        <input type="text" className="field" placeholder="location" />
        <button className="btn">Book an Appointment</button>
      </div>
      <div className="services">
        <div className="icon">
          <img src={Home} alt="" className="services-img" />
          <p className="icons-p">Home Tests</p>
        </div>
        <div className="icon">
          <img src={Lab} alt="" className="services-img" />
          <p className="icons-p">NewLife Pathology</p>
        </div>
        <div className="icon">
          <img src={Checkup} alt="" className="services-img" />
          <p className="icons-p">Full Body Checkups</p>
        </div>
      </div>
    </div>
  );
}

export default Booking;
