import React from "react";
import brandLogo from "../images/brand_logo.svg";

import { Navbar, Nav, Col, Row } from "react-bootstrap";
/*TODO: add window width state in App.js and pass to this component and create a tenary operator to set width of columns*/
function NavbarHeader() {
  return (
    <Row sm={12}>
      <Navbar
        className="d-flex"
        variant="dark"
        style={{
          flexDirection: "row",
          backgroundColor: " rgba(31, 7, 53)",
          width: "100%",
        }}
      >
        <Col sm={6}>
          <Navbar.Brand href="#home" style={{ flexGrow: "2"}}>
            <img className="brand-logo" src={brandLogo} alt="Brand Logo" />
            Amah Martin
          </Navbar.Brand>
        </Col>
        <Col sm={6}>
          <Nav className="mr-4" style={{ justifyContent: "end"}}>
            <Nav.Link href="#portfolioSection">Portfolio</Nav.Link>
            <Nav.Link href="#skillSection">About</Nav.Link>
            <Nav.Link href="#hireMe">Hire Me</Nav.Link>
          </Nav>
        </Col>
      </Navbar>
    </Row>
  );
}

export default NavbarHeader;
