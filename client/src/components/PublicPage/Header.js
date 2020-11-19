import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUserAlt,
  faCar,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <section className="header">
        <Navbar
          className="header"
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
        >
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="/logo.png"
              width="100"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">
                <FontAwesomeIcon icon={faHome} size="lg" />
                <strong>
                  <span>HOME </span>
                </strong>
              </Nav.Link>
              <Nav.Link href="/vehicles">
                <FontAwesomeIcon icon={faCar} size="lg" />
                <strong>
                  <span>MODELS </span>
                </strong>
              </Nav.Link>
              <Nav.Link href="/dealers">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                <strong>
                  <span> DEALERS</span>
                </strong>
              </Nav.Link>
              <Nav.Link href="/dashboard">
                <FontAwesomeIcon icon={faUserAlt} size="lg" />
                <strong>
                  <span>MY ACCOUNT </span>
                </strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </>
  );
}
