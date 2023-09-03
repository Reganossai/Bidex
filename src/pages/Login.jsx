import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../assets/image 1.png";
import google from "../assets/google.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="login-div">
      
    <img src={back} className="imak" alt="imak"/>
  <div className="form-div">
  <h1>Login</h1>
      <form>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            name="email"
            value={email}

            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            placeholder="Enter your password"
          />         
        </div>
        <div className="forgot-pass"> <Link to="#">Forgot Password?</Link></div>
        <button
          onClick={handleLogin}
          type="submit"
          id="log-btn"
        >
          Login
        </button>
        <br />

        <div className="kupa">
          <Link to="/register"><span className="kupa-span">Don't Have An Account yet? </span> Sign Up</Link>
        </div>
      </form>

      
      <div className="hir-or">
        <hr className="hir"/>
        <p className="hir-pee">or</p>
        <hr className="hir"/>
      </div>

      <button id="google-bt" ><Link><span className="google-sub"><img src={google} className="google" alt="google"/></span> Continue with Google</Link></button>
      </div>

      </div>

  );
};

export default Login;
