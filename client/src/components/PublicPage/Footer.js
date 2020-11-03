import React from "react";

export default function () {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-first">
          <h5 className="footer__top-first-title"> Vehicles</h5>
          <ul>
            <li>
              <a href="/vehicles">All Vehicles</a>
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
            <li>
              <a
                href="https://www.audi.ca/ca/web/en.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audi
              </a>
            </li>
            <li>
              <a
                href="https://www.acura.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acura
              </a>
            </li>
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
          <h5 className="footer__top-second-title"> Shopping Tools</h5>
          <ul>
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
          <h5 className="footer__top-third-title">About</h5>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/dealers">Visit Us</a>
            </li>
            <li>
              <a href="/contact">Career</a>
            </li>
            <li>
              <a href="/contact">FAQ</a>
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
            Daniel Kim
          </a>
        </div>
        <div className="footer__bottom-right">
          <a
            href="https://www.linkedin.com/in/yoonhokim"
            className="fa fa-linkedin"
            target="/blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.github.com/kyh8725"
            className="fa fa-github"
            target="/blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </footer>
  );
}
