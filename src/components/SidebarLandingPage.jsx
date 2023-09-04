import React from 'react';
import {   faGear, faHouse, faRadio, faRightFromBracket, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faCommentDots, faUser } from "@fortawesome/free-regular-svg-icons";

const SidebarLandingPage = () => {
  return (
    <div className="sidebar-div">
      <nav>
        <ul>
        <li id="adm">
                <NavLink activeClassName="active" to="/login">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Login
                </NavLink>
              </li><li id="adm">
                <NavLink activeClassName="active" to="/register">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Register
                </NavLink>
              </li><li id="adm">
                <NavLink activeClassName="active" to="/otp">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Otp
                </NavLink>
              </li><li id="adm">
                <NavLink activeClassName="active" to="/pin">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Verfication
                </NavLink>
              </li><li id="adm">
                <NavLink activeClassName="active" to="/forgot-password">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  forgot password
                </NavLink>
              </li>
          <li id="adm">
            <NavLink  activeClassName="active" to="/dashboard/home">
            <span> <FontAwesomeIcon icon={faHouse} className="fontawesome-sidebar"/></span>Home
            </NavLink>
          </li>
          <li  id="adm">
            <NavLink activeClassName="active" to="/dashboard/seeds">
             <span> <FontAwesomeIcon icon={faWallet} className="fontawesome-sidebar"/></span>Seeds
            </NavLink>
          </li>
          <li  id="prof">
            <NavLink activeClassName="active" to="/dashboard/transactions">
             <span> <FontAwesomeIcon icon={faRadio} className="fontawesome-sidebar"/></span>Transactions
            </NavLink>
          </li>
          <li id="adm" >
            <NavLink  activeClassName="active" to="/dashboard/messages">
            <span> <FontAwesomeIcon icon={faCommentDots} className="fontawesome-sidebar"/></span>Messages
            </NavLink>
          </li>
          <li id="prof" >
            <NavLink  activeClassName="active" to="/dashboard/account">
            <span> <FontAwesomeIcon icon={faUser} className="fontawesome-sidebar"/></span>My Account
            </NavLink>
          </li>
          <li id="adm" >
            <NavLink  activeClassName="active" to="/dashboard/settings">
            <span> <FontAwesomeIcon icon={faGear} className="fontawesome-sidebar"/></span>Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default SidebarLandingPage