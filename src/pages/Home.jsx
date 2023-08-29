import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import naija from "../assets/nigeria.png";
import usa from "../assets/usa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faRadio,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import NewSeed from "../components/NewSeed";
import SeedsTable from "../components/SeedsTable";
import arrow from "../assets/Arrow 17.png";
import arroww from "../assets/Arrow 18.png";
import ellipse from "../assets/Ellipse 33.png";
import ellipsee from "../assets/Ellipse 34.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="ovrl-sub">
          <h1 className="header">Wallets</h1>
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
          <div className="plus-dash">
            <div className="plus">
              <h1>+</h1>
            </div>
            <div className="dash">
              <h1 className="amount">#34,523,200,000</h1>
              <p className="updated">Updated 3 mins ago</p>
              <div className="pay-fun-mor">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="font-awesome-home"
                />
                <span>
                  <h1>Payout</h1>
                </span>
                <FontAwesomeIcon icon={faRadio} className="font-awesome-home" />
                <span>
                  <h1>Fund</h1>
                </span>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="font-awesome-home"
                />
                <span>
                  <h1>More</h1>
                </span>
              </div>
            </div>

            <div className="dash-two">
              <h1 className="amount">
                $34,523
                <span>
                  <img src={usa} className="am-flag" alt="usa" />
                </span>
              </h1>
              <p className="updated">Updated 3 mins ago</p>
              <div className="pay-fun-mor">
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="font-awesome-home"
                />
                <span>
                  <h1>More</h1>
                </span>
              </div>
            </div>
            <div className="seed-home">
              <NewSeed />
            </div>
          </div>
          <div className="seed-all-currency">
            <h1>Seeds</h1>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Currency
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
          <div>
            <SeedsTable />
          </div>
          <div className="transactions-home">
            <div className="trans-see-more">
              <h1>Transaction</h1>
              <Link to="#">See all</Link>
            </div>
            <div className="trans-home-sub">
              <img src={arroww} className="arrow-trans-home" alt="arrow" />
              <img src={ellipsee} className="ellipse-trans-home" alt="arrow" />
              <div className="dey-play">
                <h2>Buy Dollars</h2>
                <p>8 Aug 2020,02:45 Am</p>
              </div>
              <div className="polo-g">
                <h5>+2,351 USD</h5>
                <p>$1,678.00</p>
              </div>
            </div>

            <div className="trans-home-sub">
              <img src={arrow} className="arrow-trans-home" alt="arrow" />
              <img src={ellipse} className="ellipse-trans-home" alt="arrow" />
              <div className="dey-play">
                <h2>Sold Naira</h2>
                <p>8 Aug 2020,02:45 Am</p>
              </div>
              <div className="polo-g">
                <h5>-22,000 NGN</h5>
                <p>$1,678.00</p>
              </div>
            </div>

            <div className="trans-home-sub">
              <img src={arroww} className="arrow-trans-home" alt="arrow" />
              <img src={ellipsee} className="ellipse-trans-home" alt="arrow" />
              <div className="dey-play">
                <h2>Seeded Naira</h2>
                <p>8 Aug 2020,02:45 Am</p>
              </div>
              <div className="polo-g">
                <h5>-22,000 NGN</h5>
                <p>$1,678.00</p>
              </div>
            </div>

            <div className="trans-home-sub">
              <img src={arrow} className="arrow-trans-home" alt="arrow" />
              <img src={ellipse} className="ellipse-trans-home" alt="arrow" />
              <div className="dey-play">
                <h2>Seeded Dollars</h2>
                <p>8 Aug 2020,02:45 Am</p>
              </div>
              <div className="polo-g">
                <h5>-22,000 NGN</h5>
                <p>$1,678.00</p>
              </div>
            </div>

            <div className="trans-home-sub">
              <img src={arroww} className="arrow-trans-home" alt="arrow" />
              <img src={ellipsee} className="ellipse-trans-home" alt="arrow" />
              <div className="dey-play">
                <h2>Buy Naira</h2>
                <p>8 Aug 2020,02:45 Am</p>
              </div>
              <div className="polo-g">
                <h5>-22,000 NGN</h5>
                <p>$1,678.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
