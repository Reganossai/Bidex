import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faExclamationCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PinInput from "../components/PinInput";
import OTPInput from "../components/OTPInput";
import Menuu from "../components/Menuu";

const Securityhome = () => {
  const [isEditingChangePassword, setIsEditingChangePassword] = useState(false);
  const [isEditingChangePin, setIsEditingChangePin] = useState(false);
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleChangePasswordClick = () => {
    setIsEditingChangePassword(true);
  };

  const handleChangePinClick = () => {
    setIsEditingChangePin(true);
  };

  const savePassword = () => {
    setIsEditingChangePassword(false);
  };

  const savePin = () => {
    setIsEditingChangePin(false);
  };

  const handleGoBack = () => {
    setIsEditingChangePassword(false);
    setIsEditingChangePin(false);
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="ovrl-sub">
          <h1 className="settings-header">Settings</h1>
          <Menu />
          <Menuu/>
          <div className="pin-pass">
            <button onClick={handleChangePinClick}>
              <FontAwesomeIcon icon={faLock} className="fag" />
              Change Pin
            </button>
          </div>
          <div className="pin-pass">
            <button onClick={handleChangePasswordClick}>
              <FontAwesomeIcon icon={faExclamationCircle} className="fag" />
              Change Password
            </button>
          </div>
          {isEditingChangePin ? (
            <div className="ovrl-sub-security-change-password-popup">
              <form onSubmit={savePin} className="input-otp-form">
                <h1>
                  <button>
                    <FontAwesomeIcon
                      icon={faArrowLeftLong}
                      className="font-back"
                      onClick={handleGoBack}
                    />
                  </button>
                </h1>
                <div className="boxx">
                  <div id="bmp" className="flex items-center justify-center flex-col">
                    <h2 className="pin-header my-4">Enter Current Pin</h2>
                    <div className="para">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78"
                        height="6"
                        viewBox="0 0 78 6"
                        fill="none"
                      >
                        <path
                          d="M3 3H75"
                          stroke="#1F5EFA"
                          stroke-opacity="0.75"
                          stroke-width="5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="testt">
                    <OTPInput length={4} />
                  </div>
                </div>
                <div className="boxx">
                  <div id="bmp" className="flex items-center justify-center flex-col">
                    <h2 className="pin-header my-4">Enter New Pin</h2>
                    <div className="para">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78"
                        height="6"
                        viewBox="0 0 78 6"
                        fill="none"
                      >
                        <path
                          d="M3 3H75"
                          stroke="#1F5EFA"
                          stroke-opacity="0.75"
                          stroke-width="5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="testt">
                    <OTPInput length={4} />
                  </div>
                </div>
                <button id="liop" className="btn btn-primary">
                  Continue
                </button>
              </form>
            </div>
          ) : null}
          {isEditingChangePassword ? (
            <div className="ovrl-sub-security-change-password-popup">
              <h1>
                <button>
                  <FontAwesomeIcon
                    icon={faArrowLeftLong}
                    className="font-back"
                    onClick={handleGoBack}
                  />
                </button>
              </h1>
              <h1 className="settings-header">Change Password</h1>
              <p>Create your login password</p>
              <form onSubmit={savePassword}>
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

                <button
                  type="submit"
                  className="btn btn-primary"
                  id="change-pass-bt"
                >
                  Change Password
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Securityhome;
