import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBars,
  faMagnifyingGlass,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import {
  faChartSimple,
  faGraduationCap,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
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
        <Link to="#">
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

            <div onClick={handleNav} className="zaracho">
              {nav ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </ul>

          {nav ? (
            <div id="navbarSupportedContentMobile">
              <ul>
                <li id="dash">
                  <NavLink activeClassName="active" to="/dashboard">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faChartSimple}
                        className="fontawesome-sidebar"
                      />
                    </span>{" "}
                    Dashboard
                  </NavLink>
                </li>
                <hr className="hop" />
                <li id="adm">
                  <NavLink activeClassName="active" to="#">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="fontawesome-sidebar"
                      />
                    </span>{" "}
                    Admission
                  </NavLink>
                </li>

                <hr className="hop" />
                <li id="prof">
                  <NavLink activeClassName="active" to="#">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faUserPen}
                        className="fontawesome-sidebar"
                      />
                    </span>{" "}
                    Profile
                  </NavLink>
                </li>

                <hr className="hop" />
                {/* <li>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                </li> */}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
