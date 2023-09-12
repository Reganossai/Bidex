import React from "react";
import { NavLink } from "react-router-dom";

const Menuu = () => {
  return (
    <div>
      <nav className="settings-menuu">
        <NavLink
          id="menu-linkss"
          activeClassName="active"
          to="/dashboard/settings/security/home"
        >
        Security
        </NavLink>

        <NavLink id="menu-linkss" activeClassName="active" to="/dashboard/settings/security/verify-account">
        Verify Account
        </NavLink>

        <NavLink id="menu-linkss" activeClassName="active" to="/dashboard/settings/verify-bvn">
       Verify BVN
        </NavLink>
      </nav>
    </div>
  );
};

export default Menuu;
