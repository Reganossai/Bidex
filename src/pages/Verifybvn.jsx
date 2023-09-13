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
import PhotoUploader from "../components/PhotoUploader";


const Verifybvn = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="ovrl-sub">
          <h1 className="settings-header">Settings</h1>
          <Menu />
          <Menuu />
          <form>
            <div className="form-group">
              <label htmlFor="countryIssued">Country Issued</label>
              <input
                type="text"
                name="countryIssued"
                
                className="form-control"
                placeholder="Nigeria"
              />
            </div>
            <div className="form-group">
              <label htmlFor="documentType">Document Type</label>
              <input
                type="text"
                className="form-control"
                name="documentType"
                
                placeholder="Passport"
              />
            </div>

            <div className="form-group">
              <label htmlFor="idNumber">ID Number</label>
              <input
                type="text"
                className="form-control"
                name="idNumber"
                
                placeholder="Input your National identity number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="idNumber">Upload a photo of your ID</label>
              <p>Ensure the ID number is clearly visible on the photo and the photo is not cropped</p>
              <div className="emerency">
              <PhotoUploader/>
              </div>
            
            </div>
            <button className="btn btn-primary" id="olali">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verifybvn;
