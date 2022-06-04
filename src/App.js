import React from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Booking from "./Booking";
import Patient from "./Patient";
import History from "./History";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/doc" element={<Login />}/>
      <Route path="/booking" element={<Booking />}/>
      <Route path="/patient" element={<Patient />}/>
      <Route path="/history" element={<History />}/>

      </Routes>
      
    </div>
  );
}

export default App;
