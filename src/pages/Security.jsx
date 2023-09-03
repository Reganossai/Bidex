import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Security = () => {
  const [isEditingChangePassword, setIsEditingChangePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleChangePasswordClick = () => {
    setIsEditingChangePassword(true);
  };

  const Save = () =>{
    setIsEditingChangePassword(false);
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="ovrl-sub">
          <h1 className="settings-header">Settings</h1>
          <Menu />
          <div className="pin-pass">
            <FontAwesomeIcon icon={faLock} className="fag" />
            Change Pin
          </div>
          <div className="pin-pass">
            <button onClick={handleChangePasswordClick}>
              <FontAwesomeIcon icon={faExclamationCircle} className="fag" />
              Change Password
            </button>
          </div>
          {isEditingChangePassword ? (
             <div className="ovrl-sub-security-change-password-popup">
             <h1 className="settings-header">Change Password</h1>
             <p>Create your login password</p>
              <form onSubmit={Save}>
                <div className="form-group">
                  <label for="fullname">Enter Current Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-control"
                    placeholder="***************"
                  />
                </div>
                <div className="form-group">
                  <label for="newpassword">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="newpassword"
                    value={newpassword}
                    placeholder="***************"
                  />
                </div>

                <div className="form-group">
                  <label for="confirmpassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    value={confirmpassword}
                    className="form-control"
                    placeholder="***************"
                  />
                </div>

                <button type="submit" className="btn btn-primary"  id="change-pass-bt">Change Password</button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Security;
