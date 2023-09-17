import React from "react";
import Navbar from "../components/Navbar";
import SidebarLandingPage from "../components/SidebarLandingPage";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SidebarLandingPage/>
      <div className="ovrl">
        <div className="ovrl-sub">
          <p className="lando">(Note: For mobile view)</p>
          <p className="lando">
            Click on the top right hamburger to access the designs for login
            page, register page, otp page, verification page, forgot password
            page, dashboard page, seed page, transaction page, messages page,
            and settings page
          </p>
        </div>
      </div> 
    </div>
  );
};

export default LandingPage;
