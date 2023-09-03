import React from "react";
import svg from "../assets/Group 26651.png";
import usa from "../assets/usa.png";
import naija from "../assets/nigeria.png";

function TransactionTable() {
  return (
    <div>
      <div>
        <div className="usa-bla">
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
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Transaction
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
      </div>

      <table id="tbb" class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">To/From</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="light-blue">
            <th className="rod" scope="row">
              <img src={svg} className="u-s-a-table" alt="usa" />
            </th>
            <td className="daty">
              <p>28/10/2023</p>
            </td>
            <td className="daty">
              <p>from USD Bid</p>
            </td>
            <td className="gree">
              <p>+$1000</p>
            </td>
            <td className="daty">@User2132</td>
            <td className="gree">
              <p>Completed</p>
            </td>
          </tr>

          <tr className="dark-blue">
            <th className="rod" scope="row">
              <img src={svg} className="u-s-a-table" alt="usa" />
            </th>
            <td className="daty">
              <p>28/10/2023</p>
            </td>
            <td className="daty">
              <p>from USD Bid</p>
            </td>
            <td className="gree">
              <p>+$1000</p>
            </td>
            <td className="daty">@User2132</td>
            <td className="gree">
              <p>Completed</p>
            </td>
          </tr>

          <tr className="light-blue">
            <th className="rod" scope="row">
              <img src={svg} className="u-s-a-table" alt="usa" />
            </th>
            <td className="daty">
              <p>28/10/2023</p>
            </td>
            <td className="daty">
              <p>from USD Bid</p>
            </td>
            <td className="ree">
              <p>$1000</p>
            </td>
            <td className="daty">@User2132</td>
            <td className="ree">
              <p>Rejected</p>
            </td>
          </tr>

          <tr className="dark-blue">
            <th className="rod" scope="row">
              <img src={svg} className="u-s-a-table" alt="usa" />
            </th>
            <td className="daty">
              <p>28/10/2023</p>
            </td>
            <td className="daty">
              <p>from USD Bid</p>
            </td>
            <td className="gree">
              <p>+$1000</p>
            </td>
            <td className="daty">@User2132</td>
            <td className="gree">
              <p>Completed</p>
            </td>
          </tr>

          <tr className="dark-blue">
            <th className="rod" scope="row">
              <img src={svg} className="u-s-a-table" alt="usa" />
            </th>
            <td className="daty">
              <p>28/10/2023</p>
            </td>
            <td className="daty">
              <p>from USD Bid</p>
            </td>
            <td className="gree">
              <p>+$1000</p>
            </td>
            <td className="daty">@User2132</td>
            <td className="gree">
              <p>Completed</p>
            </td>
          </tr>

          <tr className="dark-blue">
            <th className="rod" scope="row">
              <img src={svg} className="u-s-a-table" alt="usa" />
            </th>
            <td className="daty">
              <p>28/10/2023</p>
            </td>
            <td className="daty">
              <p>from USD Bid</p>
            </td>
            <td className="gree">
              <p>+$1000</p>
            </td>
            <td className="daty">@User2132</td>
            <td className="gree">
              <p>Completed</p>
            </td>
          </tr>

          <tr className="dark-blue">
            <th className="rod" scope="row">
              <img src={svg} className="u-s-a-table" alt="usa" />
            </th>
            <td className="daty">
              <p>28/10/2023</p>
            </td>
            <td className="daty">
              <p>from USD Bid</p>
            </td>
            <td className="gree">
              <p>+$1000</p>
            </td>
            <td className="daty">@User2132</td>
            <td className="gree">
              <p>Completed</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
