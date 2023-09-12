import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OngoingSeed from "../components/OngoingSeed";
import NewSeed from "../components/NewSeed";
import naija from "../assets/nigeria.png";
import usa from "../assets/usa.png";

const Seeds = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="seed-container ">
          <div className="seed-container-sub">
          <h1 className="settings-header">Settings</h1>
            <div className="naija-usa">
            <button id="naija-bt" className="btn btn-primary">
              <img src={naija} className="nj" alt="naija" />
              <span>
                <h1>NGN</h1>
              </span>
            </button>
            <button id="usa-bt" className="btn btn-primary">
              <img src={usa} className="u-s-a" alt="usa" />
              <span>
                <h1>USD</h1>
              </span>
            </button>
          </div>
            {/* Ongoing seed */}
            <OngoingSeed />
          </div>
          {/* NewSeed */}
          <div className="seed-seed">
          <NewSeed />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Seeds;
