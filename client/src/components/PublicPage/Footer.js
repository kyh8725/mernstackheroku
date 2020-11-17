import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function () {
  const [vehicles, setVehicles] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [about, setAbout] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-first">
          <h5
            className="footer__top-first-title"
            onClick={() => setVehicles(!vehicles)}
          >
            Vehicles
            <span>
              <FontAwesomeIcon
                icon={vehicles ? faAngleUp : faAngleDown}
                size="lg"
              />
            </span>
          </h5>

          <ul
            className="collapse"
            style={{ display: vehicles ? "block" : "none" }}
          >
            <li>
              <a href="/vehicles">All Vehicles </a>
            </li>
            <li>
              <a
                href="https://www.porsche.com/canada/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Porsche
              </a>
            </li>
            <li>
              <a
                href="https://www.ferrari.com/en-EN"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ferrari
              </a>
            </li>
            <li>
              <a
                href="https://www.lamborghini.com/en-en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lamborghini
              </a>
            </li>
            <li>
              <a
                href="https://www.mclaren.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mclaren
              </a>
            </li>
            <li>
              <a
                href="https://www.mercedes-benz.ca/en/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mercedes-Benz
              </a>
            </li>
            <li>
              <a
                href="https://www.bmw.ca/en/home.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                BMW
              </a>
            </li>
            <li></li>
            <li></li>
            <li>
              <a
                href="https://www.nissan.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nissan
              </a>
            </li>
            <li>
              <a
                href="https://www.toyota.ca/toyota/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toyota
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__top-second">
          <h5
            className="footer__top-second-title"
            onClick={() => setShopping(!shopping)}
          >
            Shopping Tools
            <span>
              <FontAwesomeIcon
                icon={shopping ? faAngleUp : faAngleDown}
                size="lg"
              />
            </span>
          </h5>

          <ul
            className="collapse"
            style={{ display: shopping ? "block" : "none" }}
          >
            <li>
              <a href="/vehicles">Special Offers</a>
            </li>
            <li>
              <a
                href="https://www.autotrader.ca/?prv=British+Columbia&r=9&rprv=True&loc=British+Columbia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certified Pre-Owned
              </a>
            </li>
            <li>
              <a href="/contact">Financing Options</a>
            </li>
          </ul>
        </div>
        <div className="footer__top-third">
          <h5
            className="footer__top-third-title"
            onClick={() => setAbout(!about)}
          >
            About
            <span>
              <FontAwesomeIcon
                icon={about ? faAngleUp : faAngleDown}
                size="lg"
              />
            </span>
          </h5>
          <ul
            className="collapse"
            style={{ display: about ? "block" : "none" }}
          >
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/dealers">Visit Us</a>
            </li>
            <li>
              <a
                href="https://kyh8725.github.io/"
                target="/blank"
                rel="noopener noreferrer"
              >
                Career
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-left">
          &copy; 2020 Copyright:
          <a
            href="https://kyh8725.github.io/"
            target="/blank"
            rel="noopener noreferrer"
          >
            &nbsp; Daniel Kim
          </a>
        </div>
        <div className="footer__bottom-right">
          <a
            href="https://www.linkedin.com/in/yoonhokim"
            className="fa fa-linkedin"
            target="/blank"
            rel="noopener noreferrer"
          >
            {""}
          </a>
          <a
            href="https://www.github.com/kyh8725"
            className="fa fa-github"
            target="/blank"
            rel="noopener noreferrer"
          >
            {""}
          </a>
        </div>
      </div>
    </footer>
  );
}
