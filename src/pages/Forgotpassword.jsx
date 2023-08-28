import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../assets/image 1.png";
import google from "../assets/google.png"

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="login-div">
      
    <img src={back} className="imak" alt="imak"/>
  <div className="form-div">
  <h1>Bidex</h1>

  <h2>Forgot password</h2>
  <p>Input the email associated with your account for instructions to reset your account</p>
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
        
        <button
          type="submit"
          id="for-btn"
        >
          Continue
        </button>
      </form>

      </div>

      </div>

  );
};

export default Forgotpassword;
