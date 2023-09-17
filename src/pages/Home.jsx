import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import naija from "../assets/nigeria.png";
import usa from "../assets/usa.png";
import britain from "../assets/britain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBank,
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
  const [isAddWallet, setIsAddWallet] = useState(false);
  const [isPayout, setIsPayout] = useState(false);
  const [isFund, setIsFund] = useState(false);
  const [isBidexAccount, setIsBidexAccount] = useState(false);
  const [isBankAccount, setIsBankAccount] = useState(false);

  const handleAddWalletClick = () => {
    setIsAddWallet(true);
  };

  const handleFundClick = () => {
    setIsFund(true);
  };

  const handlePayoutClick = () => {
    setIsPayout(true);
  };

  const handleBidexAccountClick = () => {
    setIsBidexAccount(true);
  };

  const handleBankAccountClick = () => {
    setIsBankAccount(true);
  };

  const handleClose = () => {
    setIsAddWallet(false);
    setIsPayout(false);
    setIsFund(false);
    setIsBidexAccount(false);
    setIsBankAccount(false);
  };

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
              <h1>
                <button onClick={handleAddWalletClick}>+</button>
              </h1>
            </div>
            <div className="dash">
              <h1 className="amount">$34,523,200</h1>
              <p className="updated">Updated 3 mins ago</p>
              <div className="pay-fun-mor">
                <button onClick={handlePayoutClick}>
                  <FontAwesomeIcon
                    icon={faWallet}
                    className="font-awesome-home"
                  />
                </button>
                <span>
                  <button onClick={handlePayoutClick}>
                    <h1>Payout</h1>
                  </button>
                </span>
                <button onClick={handleFundClick}>
                  <FontAwesomeIcon
                    icon={faRadio}
                    className="font-awesome-home"
                  />
                </button>
                <span>
                  <button onClick={handleFundClick}>
                    <h1>Fund</h1>
                  </button>
                </span>
                <button>
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="font-awesome-home"
                  />
                </button>
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
        {isAddWallet ? (
          <div className="bank-account">
            <div id="xxx" className="cancel-icon cursor-pointer">
              <button onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g filter="url(#filter0_b_633_2349)">
                    <rect width="30" height="30" rx="15" fill="#F1F5F9" />
                    <path
                      d="M9.27177 19.3446C8.91186 19.7045 8.90451 20.3435 9.27911 20.7181C9.66106 21.0927 10.3001 21.0854 10.6526 20.7328L15.0009 16.3845L19.3419 20.7255C19.7091 21.0927 20.3408 21.0927 20.7154 20.7181C21.09 20.3362 21.09 19.7119 20.7227 19.3446L16.3818 15.0037L20.7227 10.6554C21.09 10.2881 21.0973 9.65647 20.7154 9.28187C20.3408 8.90728 19.7091 8.90728 19.3419 9.27453L15.0009 13.6155L10.6526 9.27453C10.3001 8.91462 9.65371 8.89993 9.27911 9.28187C8.90451 9.65647 8.91186 10.3028 9.27177 10.6554L13.6127 15.0037L9.27177 19.3446Z"
                      fill="#475569"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_633_2349"
                      x="-54.3656"
                      y="-54.3656"
                      width="138.731"
                      height="138.731"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="27.1828"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_633_2349"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_633_2349"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="header-wallet">
              <h1>Add Wallet</h1>
              <h3>Select wallet you want to trade with</h3>
            </div>
            <div className="wallet-country-options">
              <div className="bank-options">
                <div className="country-details">
                  <div>
                    <img src={britain} className="njj" alt="naija" />
                  </div>
                  <div className="country-bank-logo mx-2">
                    <h2 className="country-name"> British Pounds</h2>
                    <h2 className="country-initials">GDP</h2>
                  </div>
                </div>
                <div className="add-icon-btn cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <rect width="27" height="27" rx="13.5" fill="white" />
                    <path
                      d="M17.5909 11.9659H15.0341V9.40909C15.0341 8.57045 14.3386 7.875 13.5 7.875C12.6614 7.875 11.9659 8.57045 11.9659 9.40909V11.9659H9.40909C8.57045 11.9659 7.875 12.6614 7.875 13.5C7.875 14.3386 8.57045 15.0341 9.40909 15.0341H11.9659V17.5909C11.9659 18.4295 12.6614 19.125 13.5 19.125C14.3386 19.125 15.0341 18.4295 15.0341 17.5909V15.0341H17.5909C18.4295 15.0341 19.125 14.3386 19.125 13.5C19.125 12.6614 18.4295 11.9659 17.5909 11.9659Z"
                      fill="#292D32"
                    />
                  </svg>
                </div>
              </div>

              <div className="bank-options">
                <div className="country-details">
                  <div>
                    <img src={naija} className="njj" alt="naija" />
                  </div>
                  <div className="country-bank-logo mx-2">
                    <h2 className="country-name"> Nigerian Naira</h2>
                    <h2 className="country-initials">NGN</h2>
                  </div>
                </div>
                <div className="add-icon-btn cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <rect width="27" height="27" rx="13.5" fill="white" />
                    <path
                      d="M17.5909 11.9659H15.0341V9.40909C15.0341 8.57045 14.3386 7.875 13.5 7.875C12.6614 7.875 11.9659 8.57045 11.9659 9.40909V11.9659H9.40909C8.57045 11.9659 7.875 12.6614 7.875 13.5C7.875 14.3386 8.57045 15.0341 9.40909 15.0341H11.9659V17.5909C11.9659 18.4295 12.6614 19.125 13.5 19.125C14.3386 19.125 15.0341 18.4295 15.0341 17.5909V15.0341H17.5909C18.4295 15.0341 19.125 14.3386 19.125 13.5C19.125 12.6614 18.4295 11.9659 17.5909 11.9659Z"
                      fill="#292D32"
                    />
                  </svg>
                </div>
              </div>

              <div className="bank-options">
                <div className="country-details">
                  <div>
                    <img src={usa} className="njj" alt="naija" />
                  </div>
                  <div className="country-bank-logo mx-2">
                    <h2 className="country-name"> United States Dollars</h2>
                    <h2 className="country-initials">USD</h2>
                  </div>
                </div>
                <div className="add-icon-btn cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <rect width="27" height="27" rx="13.5" fill="white" />
                    <path
                      d="M17.5909 11.9659H15.0341V9.40909C15.0341 8.57045 14.3386 7.875 13.5 7.875C12.6614 7.875 11.9659 8.57045 11.9659 9.40909V11.9659H9.40909C8.57045 11.9659 7.875 12.6614 7.875 13.5C7.875 14.3386 8.57045 15.0341 9.40909 15.0341H11.9659V17.5909C11.9659 18.4295 12.6614 19.125 13.5 19.125C14.3386 19.125 15.0341 18.4295 15.0341 17.5909V15.0341H17.5909C18.4295 15.0341 19.125 14.3386 19.125 13.5C19.125 12.6614 18.4295 11.9659 17.5909 11.9659Z"
                      fill="#292D32"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {isPayout ? (
          <div className="bank-account">
            <div id="xxx" className="cancel-icon cursor-pointer">
              <button onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g filter="url(#filter0_b_633_2349)">
                    <rect width="30" height="30" rx="15" fill="#F1F5F9" />
                    <path
                      d="M9.27177 19.3446C8.91186 19.7045 8.90451 20.3435 9.27911 20.7181C9.66106 21.0927 10.3001 21.0854 10.6526 20.7328L15.0009 16.3845L19.3419 20.7255C19.7091 21.0927 20.3408 21.0927 20.7154 20.7181C21.09 20.3362 21.09 19.7119 20.7227 19.3446L16.3818 15.0037L20.7227 10.6554C21.09 10.2881 21.0973 9.65647 20.7154 9.28187C20.3408 8.90728 19.7091 8.90728 19.3419 9.27453L15.0009 13.6155L10.6526 9.27453C10.3001 8.91462 9.65371 8.89993 9.27911 9.28187C8.90451 9.65647 8.91186 10.3028 9.27177 10.6554L13.6127 15.0037L9.27177 19.3446Z"
                      fill="#475569"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_633_2349"
                      x="-54.3656"
                      y="-54.3656"
                      width="138.731"
                      height="138.731"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="27.1828"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_633_2349"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_633_2349"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="header-wallet">
              <h1>Select Method</h1>
              <h3>Select the Payout method</h3>
            </div>
            <div className="wallet-country-options">
              <button onClick={handleBankAccountClick}>
                <div className="bank-options">
                  <div className="country-details">
                    <div>
                      <FontAwesomeIcon icon={faBank} className="city-guy" />
                    </div>
                    <div className="country-bank-logo mx-2">
                      <h2 className="country-name"> Withdraw to bank</h2>
                    </div>
                  </div>
                  <div className="add-icon-btn cursor-pointer">
                    <FontAwesomeIcon icon={faArrowRight} className="dnam" />
                  </div>
                </div>
              </button>

              <button onClick={handleBidexAccountClick}>
                <div className="bank-options">
                  <div className="country-details">
                    <div>
                      <FontAwesomeIcon icon={faBank} className="city-guy" />
                    </div>
                    <div className="country-bank-logo mx-2">
                      <h2 className="country-name">
                        Transfer to Bidex Other Account
                      </h2>
                    </div>
                  </div>
                  <div className="add-icon-btn cursor-pointer">
                    <FontAwesomeIcon icon={faArrowRight} className="dnam" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : null}

        {isFund ? (
          <div className="bank-account">
            <div id="xxx" className="cancel-icon cursor-pointer">
              <button onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g filter="url(#filter0_b_633_2349)">
                    <rect width="30" height="30" rx="15" fill="#F1F5F9" />
                    <path
                      d="M9.27177 19.3446C8.91186 19.7045 8.90451 20.3435 9.27911 20.7181C9.66106 21.0927 10.3001 21.0854 10.6526 20.7328L15.0009 16.3845L19.3419 20.7255C19.7091 21.0927 20.3408 21.0927 20.7154 20.7181C21.09 20.3362 21.09 19.7119 20.7227 19.3446L16.3818 15.0037L20.7227 10.6554C21.09 10.2881 21.0973 9.65647 20.7154 9.28187C20.3408 8.90728 19.7091 8.90728 19.3419 9.27453L15.0009 13.6155L10.6526 9.27453C10.3001 8.91462 9.65371 8.89993 9.27911 9.28187C8.90451 9.65647 8.91186 10.3028 9.27177 10.6554L13.6127 15.0037L9.27177 19.3446Z"
                      fill="#475569"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_633_2349"
                      x="-54.3656"
                      y="-54.3656"
                      width="138.731"
                      height="138.731"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="27.1828"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_633_2349"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_633_2349"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="header-wallet">
              <h1>Select Method</h1>
              <h3>Select the wallet you want to fund with</h3>
            </div>
            <div className="wallet-country-options">
              <div className="bank-options">
                <div className="country-details">
                  <div>
                    <FontAwesomeIcon icon={faBank} className="city-guy" />
                  </div>
                  <div className="country-bank-logo mx-2">
                    <h2 className="country-name">Fund With Bank Account</h2>
                  </div>
                </div>
                <div className="add-icon-btn cursor-pointer">
                  <FontAwesomeIcon icon={faArrowRight} className="dnam" />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {isBidexAccount ? (
          <div className="bank-account">
            <div id="xxx" className="cancel-icon cursor-pointer">
              <button onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g filter="url(#filter0_b_633_2349)">
                    <rect width="30" height="30" rx="15" fill="#F1F5F9" />
                    <path
                      d="M9.27177 19.3446C8.91186 19.7045 8.90451 20.3435 9.27911 20.7181C9.66106 21.0927 10.3001 21.0854 10.6526 20.7328L15.0009 16.3845L19.3419 20.7255C19.7091 21.0927 20.3408 21.0927 20.7154 20.7181C21.09 20.3362 21.09 19.7119 20.7227 19.3446L16.3818 15.0037L20.7227 10.6554C21.09 10.2881 21.0973 9.65647 20.7154 9.28187C20.3408 8.90728 19.7091 8.90728 19.3419 9.27453L15.0009 13.6155L10.6526 9.27453C10.3001 8.91462 9.65371 8.89993 9.27911 9.28187C8.90451 9.65647 8.91186 10.3028 9.27177 10.6554L13.6127 15.0037L9.27177 19.3446Z"
                      fill="#475569"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_633_2349"
                      x="-54.3656"
                      y="-54.3656"
                      width="138.731"
                      height="138.731"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="27.1828"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_633_2349"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_633_2349"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="header-wallet">
              <h1>Send to Bidex Account</h1>
              <h3>Verify Your Account to Start Transactions</h3>
            </div>
            <div className="form-group-bidex">
              <label for="fullname">Input Bidex Username</label>
              <input type="text" name="fullname" className="form-control" />
            </div>

            <button id="withdraw-bidex" className="btn btn-primary">
              Withdraw
            </button>
          </div>
        ) : null}

        {isBankAccount ? (
          <div className="bank-account">
            <div id="xxx" className="cancel-icon cursor-pointer">
              <button onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g filter="url(#filter0_b_633_2349)">
                    <rect width="30" height="30" rx="15" fill="#F1F5F9" />
                    <path
                      d="M9.27177 19.3446C8.91186 19.7045 8.90451 20.3435 9.27911 20.7181C9.66106 21.0927 10.3001 21.0854 10.6526 20.7328L15.0009 16.3845L19.3419 20.7255C19.7091 21.0927 20.3408 21.0927 20.7154 20.7181C21.09 20.3362 21.09 19.7119 20.7227 19.3446L16.3818 15.0037L20.7227 10.6554C21.09 10.2881 21.0973 9.65647 20.7154 9.28187C20.3408 8.90728 19.7091 8.90728 19.3419 9.27453L15.0009 13.6155L10.6526 9.27453C10.3001 8.91462 9.65371 8.89993 9.27911 9.28187C8.90451 9.65647 8.91186 10.3028 9.27177 10.6554L13.6127 15.0037L9.27177 19.3446Z"
                      fill="#475569"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_633_2349"
                      x="-54.3656"
                      y="-54.3656"
                      width="138.731"
                      height="138.731"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="27.1828"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_633_2349"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_633_2349"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="header-wallet">
              <h1>Select Bank Account</h1>
              <h3>Select Bank Account</h3>
            </div>
            <div className="form-group-bidex">
              <div className="form-group-bidex-sub">
             <h6>01982928988</h6>
             <h3>Johnson Daniel Agoro</h3>
             <h5>Guarantee trust Bank</h5>
             </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
