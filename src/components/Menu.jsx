import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className="settings-menu">
        <NavLink
          id="menu-links"
          activeClassName="active"
          to="/dashboard/settings/edit-profile"
        >
          Edit Profile
        </NavLink>

        <NavLink id="menu-links" activeClassName="active" to="/dashboard/settings/manage-banks">
          Manage Banks
        </NavLink>

        <NavLink id="menu-links" activeClassName="active" to="/dashboard/settings/security">
          Security
        </NavLink>

        <NavLink id="menu-links" activeClassName="active" to="/dashboard/settings/help-and-support">
          Help & Support
        </NavLink>
      </nav>
    </div>
  );
};

export default Menu;
