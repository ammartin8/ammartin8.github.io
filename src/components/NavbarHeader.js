import React from "react";
import brandLogo from "../images/brand_logo.svg";

import {Navbar, Nav} from "react-bootstrap";

function NavbarHeader() {
  return (
    <Navbar className="d-flex" variant="dark" style={{flexDirection: "row", backgroundColor: " rgba(31, 7, 53)"}}>
      <Navbar.Brand href="#home" style={{flexGrow: "2"}}><img className="brand-logo" src={brandLogo} alt="Brand Logo"/>Amah Martin</Navbar.Brand>
      <Nav className="mr-4" style={{justifyContent: "end"}}>
        <Nav.Link href="#portfolioSection">Portfolio</Nav.Link>
        <Nav.Link href="#skillSection">About</Nav.Link>
        <Nav.Link href="#hireMe">Hire Me</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarHeader; 