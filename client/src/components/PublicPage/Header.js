import React from 'react'
import {Navbar, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    return (
        <>
        <section className="header">
        <Navbar className="header" collapseOnSelect expand="lg" bg="light" variant="light">
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
          <Nav.Link href="/home"><strong>HOME</strong></Nav.Link>   
      <Nav.Link href="/vehicles"><strong>VEHICLES</strong></Nav.Link>
      <Nav.Link href="/protected"><FontAwesomeIcon icon={faUser} color="grey" size="lg" /> <strong> My Account   </strong></Nav.Link>   

          </Nav>      
        </Navbar.Collapse>
      </Navbar>
      </section>
      </>
      )
}
