import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function () {
  const [owners, setOwners] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [finance, setFinance] = useState(false);

  return (
    <>
      <div className="garage">
        <p>img log out button</p>
        <div className="garage__app">
          <div className="garage__app-top">
            <div className="garage__app-top-menu">
              <h5
                className="garage__app-top-menu-title"
                onClick={() => {
                  setOwners(!owners);
                  setShopping(false);
                  setFinance(false);
                }}
              >
                Owner's
                <span>
                  <FontAwesomeIcon icon={owners ? faMinus : faPlus} size="lg" />
                </span>
              </h5>
              <ul
                className="garage__collapse"
                style={{ display: owners ? "block" : "none" }}
              >
                <li>
                  <a href="/protected">Dashboard</a>
                </li>
                <li>
                  <a
                    href="/maintenance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="/warranty" target="_blank" rel="noopener noreferrer">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>
            <div className="garage__app-top-menu">
              <h5
                className="garage__app-top-menu-title"
                onClick={() => {
                  setOwners(false);
                  setShopping(!shopping);
                  setFinance(false);
                }}
              >
                Shopping Tools
                <span>
                  <FontAwesomeIcon
                    icon={shopping ? faMinus : faPlus}
                    size="lg"
                  />
                </span>
              </h5>
              <ul
                className="garage__collapse"
                style={{ display: shopping ? "block" : "none" }}
              >
                <li>
                  <a href="/protected">My Saved Vehicles</a>
                </li>
                <li>
                  <a href="/dealers" target="_blank" rel="noopener noreferrer">
                    Find a Dealer
                  </a>
                </li>
                <li>
                  <a href="/warranty" target="_blank" rel="noopener noreferrer">
                    My Credit Applications
                  </a>
                </li>
              </ul>
            </div>
            <div className="garage__app-top-menu">
              <h5
                className="garage__app-top-menu-title"
                onClick={() => {
                  setOwners(false);
                  setShopping(false);
                  setFinance(!finance);
                }}
              >
                Financial Information
                <span>
                  <FontAwesomeIcon
                    icon={finance ? faMinus : faPlus}
                    size="lg"
                  />
                </span>
              </h5>
              <ul
                className="garage__collapse"
                style={{ display: finance ? "block" : "none" }}
              >
                <li>
                  <a href="/protected">Summary</a>
                </li>
                <li>
                  <a
                    href="/maintenance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trnasaction History
                  </a>
                </li>
                <li>
                  <a href="/warranty" target="_blank" rel="noopener noreferrer">
                    Lease Information
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="garage__app-bottom"></div>
        </div>
        <h2 className="garage__title">
          Kyh8725's Dashboard
          {/* {this.props.user.username || this.props.user.displayName} */}
        </h2>
      </div>
    </>
  );
}
