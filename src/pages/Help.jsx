import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";

const Help = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="ovrl-sub">
          <h1 className="settings-header">Settings</h1>
          

          <div className="ovrl-sub-security-change-password-popup">
          <Menu />
            <h1 className="settings-header">Report an Issue</h1>
            <p>Encountering an issue with our app? We're here to help!</p>
            <form >
              <div className="form-group">
             
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="What was the Issue?"
                />
              </div>
              <div className="form-group">
              <textarea
              className="form-control"
              id="texp"
              cols="14"
              rows="4"
              placeholder="You can tell us more about it"
              name="message"
            ></textarea>
              </div>

              <button className="btn btn-primary" id="olali">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
