import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import back from "../assets/image 1.png";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="register-div">
      
    <img src={back} className="imak" alt="imak"/>
  <div className="form-divv">
 
      <form>
      <div className="form-group">
          <label for="firstname">First name</label>
          <input
            type="email"
            name="email"
            value={email}

            className="form-control"
            placeholder="Enter your first name"
          />
        </div>

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

        
        <div className="form-groupp">
          <label for="email">Phone number</label>
          <div className="form-groupp-sub">
          <span><div className="chee">+234</div></span>
          <input
            type="email"
            name="email"
            value={email}

            className="form-control"
            placeholder="Enter your email"
          />
          </div>
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
        <div className="terms"> <Link to="#">By signing up, you accept our <span className="blue">Terms of service</span> and <span className="blue">Privacy policy</span></Link></div>
        <button
          onClick={handleRegister}
          type="submit"
          id="log-btn"
          className="btn btn-primary"
        >
          Register
        </button>
        <br />

        <div className="kupa">
          <Link to="/register"><span className="kupa-span">Already Have An Account? </span> Login</Link>
        </div>
      </form>

      
      <div className="hir-or">
        <hr className="hir"/>
        <p className="hir-pee">or</p>
        <hr className="hir"/>
      </div>

      <button id="google-bt" className="btn btn-outline-dark"><Link><span className="google-sub"><img src={google} className="google" alt="google"/></span> Continue with Google</Link></button>
      </div>

      </div>

  );
};
export default Register;
