import React from "react";
import brandLogo from "../images/brand_logo.svg";

import { Navbar, Nav, Col, Row } from "react-bootstrap";

function NavbarHeader() {
  return (
    <Row sm={12}>
      <Navbar
        collapseOnSelect
        expand="md"
        className="d-flex"
        style={{
          flexDirection: "row",
          backgroundColor: " rgba(215, 104, 74)",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <Col xs={6} style={{ flexGrow: "2" }}>
          <Navbar.Brand href="#home" >
            <img className="brand-logo" src={brandLogo} alt="Brand Logo" />
            Amah Martin
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "end" }}>
          <Col xs={6} style={{alignSelf: "flex-end"}}>
            <Nav style={{ justifyContent: "end", textAlign: "center" }}>
              <Nav.Link href="#portfolioSection" className="nav-link">Portfolio</Nav.Link>
              <Nav.Link href="#aboutSection" className="nav-link">About</Nav.Link>
              <Nav.Link href="#hireMe" className="nav-link">Hire Me</Nav.Link>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}

export default NavbarHeader;
