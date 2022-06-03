import React from "react";
import "./History.css";
import Logo from "./logo.png";
import {Link} from 'react-router-dom';
import one from "./4.png";

function History() {
  return (
    <div className="history">
        <Link to="/patient">
        <img src={Logo} alt="" className="histlogo" />
      </Link>
      <h1>Name:Rishi Dhawan</h1>
      <img src={one} alt="" className="hist" />
      <h2>Observation by : Dr.Deepak Singal</h2>
      <h2>Observations : Dequervains synovitis</h2>
      <p>
        <strong>Medications:</strong>for reducing pain and swelling:IBUPROFEN
        <p>
          Immobilizing your thumb and wrist, keeping them straight with a splint
          or brace to help rest your tendons
        </p>
        <p>Avoiding repetitive thumb movements as much as possible</p>
        <p>
          Avoiding pinching with your thumb when moving your wrist from side to
          side
        </p>
        <p>Applying ice to the affected area</p>
      </p>
      <h2>Next meeting on :25/08/2022</h2>
    </div>
  );
}

export default History;
