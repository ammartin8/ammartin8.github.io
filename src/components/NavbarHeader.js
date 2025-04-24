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
          backgroundColor: "rgba(0,0,0,.65)",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Col xs={6} style={{ flexGrow: "2" }}>
          <Navbar.Brand href="#home" style={{color: "#fff"}}>
            <img className="brand-logo" src={brandLogo} alt="Brand Logo" />
            Amah Martin
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "flex-end" }}>
          <Col xs={6} style={{alignSelf: "flex-end",color: "#ffffff"}}>
            <Nav style={{ justifyContent: "flex-end", textAlign: "center"}}>
              <Nav.Link href="#portfolioSection" className="nav-link" style={{color:"#fff"}}>Portfolio</Nav.Link>
              <Nav.Link href="#aboutSection" className="nav-link" style={{color:"#fff"}}>About</Nav.Link>
              <Nav.Link href="#hireMe" className="nav-link" style={{color:"#fff"}}>Hire Me</Nav.Link>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}

export default NavbarHeader;
