import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBars,
  faMagnifyingGlass,  
} from "@fortawesome/free-solid-svg-icons";
import {   faGear, faHouse, faRadio, faRightFromBracket, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots, faUser } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router-dom";
import bidex from "../assets/Bidex.png";
import bell from "../assets/bell.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const history = useHistory();

  const handleNav = () => {
    setNav(!nav);
  };

  // const handleLogout = useCallback(() => {
  //   saveToken("");
  //   history.push("/login");
  // }, [saveToken, history]);

  nav
    ? (document.body.style.overflowX = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="nav-usa">
      <nav className="navbar navbar-expand-lg">
        <Link to="/dashboard/home">
          <img src={bidex} className="logoo" alt="logoo" />
        </Link>

        <div id="navbarSupportedContent">
          <ul>
            <li className="nav-link">
              <input type="search" className="search" placeholder="search" />
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="font-awesome-one"
                />
              </button>
            </li>

            <li>
              <h1>
                <img src={bell} className="bell" />
              </h1>
            </li>

            <li>
              <div className="hello">
                <h1>Hello, Johnson</h1>
                <p>Start trading now</p>
              </div>
            </li>

            <li>
              <h6>jkl</h6>
            </li>

            {/* <li>
              <button
                id="logout-bt-desktop"
                className="btn btn-primary"
                onClick={handleLogout}
              >
                Log out
              </button>
            </li> */}
          </ul>
        </div>

        {nav ? (
          <div id="navbarSupportedContentMobile">
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
                <NavLink activeClassName="active" to="/dashboard/home">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Home
                </NavLink>
              </li>
              <li id="adm">
                <NavLink activeClassName="active" to="/dashboard/seeds">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faWallet}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Seeds
                </NavLink>
              </li>
              <li id="prof">
                <NavLink activeClassName="active" to="/dashboard/transactions">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faRadio}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Transactions
                </NavLink>
              </li>
              <li id="adm">
                <NavLink activeClassName="active" to="/dashboard/messages">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Messages
                </NavLink>
              </li>
              <li id="prof">
                <NavLink activeClassName="active" to="/dashboard/account">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faUser}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  My Account
                </NavLink>
              </li>
              <li id="adm">
                <NavLink activeClassName="active" to="/dashboard/settings">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faGear}
                      className="fontawesome-sidebar"
                    />
                  </span>
                  Settings
                </NavLink>
              </li>
              <li id="lion">
                <button>
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="fontawesome-sidebar"
                  />
                  Logout
                </button>
              </li>
              {/* <li>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                </li> */}
            </ul>
          </div>
        ) : null}

        <div onClick={handleNav} className="zaracho">
          {nav ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
