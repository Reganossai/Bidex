import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";

const ManageBanks = () => {
  const [addAccount, setAddAccount] = useState(false);

  const handleAddAccountClick = () => {
    setAddAccount(true);
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="ovrl-sub">
          <h1 className="settings-header">Settings</h1>
          <Menu />
          <button
            id="add-account-bt"
            className="btn btn-primary"
            onClick={handleAddAccountClick}
          >
            <span>
              <FontAwesomeIcon icon={faPlus} className="fap-plus" />
            </span>
            Add Bank Account
          </button>
          <div className="acc">
            <p>0908970880808</p>
            <h2>Johnson Daniel Oluwatosin</h2>
            <h3>Guaranty Trust Bank</h3>
          </div>
          {addAccount ? (
            <div className="bank-account">
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="bank-account-container">
                  <h2 className="boa">Add Bank Account</h2>
                  <div className="form-group">
                    <h3 className="lab-head">Bank</h3>
                    <select
                      name="bank"
                      id="bank"
                      className="bank-utils gray-border"
                    >
                      <option
                        className="placeholder"
                        value=""
                        disabled
                        selected
                      >
                        Select Bank
                      </option>
                      <option value="firstBank">FirstBank</option>
                      <option value="ecoBank">EcoBank</option>
                      <option value="accessBank">AccessBank</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <h3 className="lab-head">Account Number</h3>
                    <input
                      type="text"
                      className="bank-utils gray-border"
                      placeholder="e.g 291028232323"
                    />
                  </div>
                  <div>
                    <button id="bnm" className="btn btn-primary">
                      <h2>Add Bank Account</h2>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ManageBanks;
