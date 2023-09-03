import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";

const Editprofile = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="ovrl-sub">
          <h1 className="settings-header">Settings</h1>
          <Menu />
          <form>
            <div className="form-group">
              <label for="fullname">Full name</label>
              <input
                type="text"
                name="fullname"
                value={fullname}
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-groupp">
              <label for="email">Phone number</label>
              <div className="form-groupp-sub">
                <span>
                  <div className="chee">+234</div>
                </span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
