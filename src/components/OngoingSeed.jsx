import React from "react";
import TransactionImg from "../assets/arrow-3.png";
import usa from "../assets/usa.png";
import naija from "../assets/nigeria.png";

function OngoingSeed() {
  return (
    <div className="ong-seed">
      <div id="ong-seed-sub" className="ongoing-seed-header mb-1">
        <h1 className="boa">Ongoing Seeds</h1>
        <select name="seedState" id="" className="seed-state cursor-pointer">
          <option value="Active">Active</option>
          <option value="Canceled">Canceled</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div id="ong-seed-sub" className="mt-6 seed-table">
        <div className="seed-table-content p-3 px-2 flex items-center justify-between">
          <div className="flex justify-center items-center">
            <div className="country-icon mx-2">
              <img src={usa} className="u-s-a-table" alt="usa" />
            </div>
            <div className="flex mx-2 flex-col">
              <h2 className="font-bold">United State dollar </h2>
              <h2 className="font-bold"> Nigeria Naira</h2>
            </div>
          </div>
          <div>
            <img src={TransactionImg} alt="" />
          </div>
          <h2 className="seed-status seed-status-canceled font-extrabold">
            cancelled
          </h2>
          <h2 className="font-bold text-black seed-value">$1000</h2>
        </div>
      </div>

      <div id="ong-seed-sub" className=" seed-table">
        <div className="seed-table-content p-3 px-2 flex items-center justify-between">
          <div className="flex justify-center items-center">
            <div className="country-icon mx-2">
              <img src={naija} className="u-s-a-table" alt="usa" />
            </div>
            <div className="flex mx-2 flex-col">
              <h2 className="font-bold">United State dollar </h2>
              <h2 className="font-bold"> Nigeria Naira</h2>
            </div>
          </div>
          <div>
            <img src={TransactionImg} alt="" />
          </div>
          <h2 className="seed-status seed-status-active font-extrabold">
            active
          </h2>
          <h2 className="font-bold text-black seed-value">$1000</h2>
        </div>
      </div>

      <div id="ong-seed-sub" className=" seed-table">
        <div className="seed-table-content p-3 px-2 flex items-center justify-between">
          <div className="flex justify-center items-center">
            <div className="country-icon mx-2">
              <img src={usa} className="u-s-a-table" alt="usa" />
            </div>
            <div className="flex mx-2 flex-col">
              <h2 className="font-bold">United State dollar </h2>
              <h2 className="font-bold">Nigeria Naira</h2>
            </div>
          </div>
          <div>
            <img src={TransactionImg} alt="" />
          </div>
          <h2 className="seed-status seed-status-completed font-extrabold">
            completed
          </h2>
          <h2 className="font-bold text-black seed-value">$1000</h2>
        </div>
      </div>

      <div id="ong-seed-sub" className=" seed-table">
        <div className="seed-table-content p-3 px-2 flex items-center justify-between">
          <div className="flex justify-center items-center">
            <div className="country-icon mx-2">
              <img src={naija} className="u-s-a-table" alt="usa" />
            </div>
            <div className="flex mx-2 flex-col">
              <h2 className="font-bold">United State dollar </h2>
              <h2 className="font-bold">Nigeria Naira</h2>
            </div>
          </div>
          <div>
            <img src={TransactionImg} alt="" />
          </div>
          <h2 className="seed-status seed-status-canceled font-extrabold">
            cancelled
          </h2>
          <h2 className="font-bold text-black seed-value">$1000</h2>
        </div>
      </div>
    </div>
  );
}

export default OngoingSeed;
