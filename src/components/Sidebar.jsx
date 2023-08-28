import React from "react";
import {   faGear, faHouse, faRadio, faRightFromBracket, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faCommentDots, faUser } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar-div">
      <nav>
        <ul>
          <li id="dash">
            <NavLink  activeClassName="active" to="/">
            <span> <FontAwesomeIcon icon={faHouse} className="fontawesome-sidebar"/></span>Home
            </NavLink>
          </li>
          <li  id="adm">
            <NavLink activeClassName="active" to="/seeds">
             <span> <FontAwesomeIcon icon={faWallet} className="fontawesome-sidebar"/></span>Seeds
            </NavLink>
          </li>
          <li  id="adm">
            <NavLink activeClassName="active" to="/transitions">
             <span> <FontAwesomeIcon icon={faRadio} className="fontawesome-sidebar"/></span>Transitions
            </NavLink>
          </li>
          <li id="prof" >
            <NavLink  activeClassName="active" to="/messages">
            <span> <FontAwesomeIcon icon={faCommentDots} className="fontawesome-sidebar"/></span>Messages
            </NavLink>
          </li>
          <li id="prof" >
            <NavLink  activeClassName="active" to="/account">
            <span> <FontAwesomeIcon icon={faUser} className="fontawesome-sidebar"/></span>My Account
            </NavLink>
          </li>
          <li id="prof" >
            <NavLink  activeClassName="active" to="/settings">
            <span> <FontAwesomeIcon icon={faGear} className="fontawesome-sidebar"/></span>Settings
            </NavLink>
          </li>
          <li id="lion" >
           
          <button><FontAwesomeIcon icon={faRightFromBracket} className="fontawesome-sidebar"/>Logout</button>
           
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
