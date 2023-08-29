import React from "react";
import arrow from "../assets/arrow-3.png";
import usa from "../assets/usa.png";
import naija from "../assets/nigeria.png";

const SeedsTable = () => {
  return (
    <div>
      <table id="tb" class="table table-striped">
        <tbody>
          <tr className="light-blue">
            <th className="rod" scope="row">
              <img src={usa} className="u-s-a-table" alt="usa" />
            </th>
            <td className="naira-dollar">
              <div className="naira-dollar">
                <p>United States Dollar</p>
                <p>Nigerian Naira</p>
              </div>
            </td>
            <td >
              <img src={arrow} className="arrow-home" alt="arrow" />
            </td>
            <td>
              <div>
                <p className="rate">Rate</p>
                <p className="lol">#700</p>
              </div>
            </td>
            <td className="keen">
              <p>$1000</p>
            </td>
          </tr>
          <tr className="dark-blue">
            <th scope="row">
              <img src={naija} className="nj-table" alt="naija" />
            </th>
            <td className="naira-dollar">
              <div className="naira-dollar">
                <p>Nigerian Naira</p>
                <p>United States Dollar</p>
              </div>
            </td>
            <td>
              <img src={arrow} className="arrow-home" alt="arrow" />
            </td>
            <td>
              <div>
                <p className="rate">Rate</p>
                <p className="lol">#900</p>
              </div>
            </td>
            <td className="keen">
              <p>$3000</p>
            </td>
          </tr>
          <tr className="light-blue">
            <th scope="row">
              <img src={usa} className="u-s-a-table" alt="usa" />
            </th>
            <td className="naira-dollar">
              <div className="naira-dollar">
                <p>United States Dollar</p>
                <p>Nigerian Naira</p>
              </div>
            </td>
            <td>
              <img src={arrow} className="arrow-home" alt="arrow" />
            </td>
            <td>
              <div>
                <p className="rate">Rate</p>
                <p className="lol">#700</p>
              </div>
            </td>
            <td className="keen">
              <p>$1000</p>
            </td>
          </tr>
          <tr className="dark-blue">
            <th scope="row">
              <img src={naija} className="nj-table" alt="naija" />
            </th>
            <td className="naira-dollar">
              <div className="naira-dollar">
                <p>Nigerian Naira</p>
                <p>United States Dollar</p>
              </div>
            </td>
            <td>
              <img src={arrow} className="arrow-home" alt="arrow" />
            </td>
            <td>
              <div>
                <p className="rate">Rate</p>
                <p className="lol">#900</p>
              </div>
            </td>
            <td className="keen">
              <p>$3000</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SeedsTable;
