import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OngoingSeed from "../components/OngoingSeed";
import NewSeed from "../components/NewSeed";

const Seeds = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="seed-container ">
          <div className="seed-container-sub">
            <h1 className="text-black font-bold seed-logo">Seed</h1>
            <div className="btn-country">
              <button
                style={{
                  backgroundColor: "#194bc8",
                }}
              >
                <h3 className="icon">🌍</h3>
                <h3 className="white-currency">NGN</h3>
              </button>
              <button
                style={{
                  backgroundColor: "#EAEAEA",
                }}
              >
                <h3 className="icon">🌍</h3>
                <h3>USA</h3>
              </button>
            </div>
            {/* Ongoing seed */}
            <OngoingSeed />
          </div>
          {/* NewSeed */}
          <NewSeed />
        </div>
      </div>
    </div>
  );
};

export default Seeds;
