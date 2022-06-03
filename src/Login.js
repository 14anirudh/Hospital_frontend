import React from "react";
import "./Login.css";
import "./logo.png";
import Google from "./google.png";
import Logo from "./logo.png";

import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="main">
      <div className="parent">
        <Link to="/">
        <img src={Logo} alt="" className="form-logo" />
        </Link>
        <input type="text" className="field" placeholder="Username" />
        <input type="password" className="field" placeholder="Password" />
        <Link to="/patient">
        <button className="btn">Sign in</button>
        </Link>
        <h5>
          <span>Or continue with</span>
        </h5>

        <img src={Google} alt="" className="google-signin" />
        <div className="new-user">
          <p>Forgot Password</p>
          <p>New User?Register</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
