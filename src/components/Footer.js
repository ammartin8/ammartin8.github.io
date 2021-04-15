import React from "react";
import brandLogo from "../images/brand_logo.svg";
import { Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  FaTwitter,
  FaGithub,
  FaChevronUp,
  FaHeart,
  FaReact,
  FaCopyright,
  FaBootstrap,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <Container
        id="upperFooterSection"
        className="upper-footer-container m-0"
        style={{ justifyContent: "center", maxWidth: "100vw" }}
      >
        <Row style={{ justifyContent: "flex-end" }}>
          <a href="#root" style={{ color: "rgb(236, 207, 207)" }}>
            <FaChevronUp style={{ fontSize: "1.5em" }} />
          </a>
        </Row>
        <Row
          className="text-center"
          style={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img className="brand-logo" src={brandLogo} alt="Brand Logo"/>
          <p style={{paddingTop: "1em"}}>Building creative solutions through data and software development, one day at a time.</p>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <IconContext.Provider value={{ className: "social-icons" }}>
            <ul
              className="d-flex social-icon-list"
              style={{ flexDirection: "row" }}
            >
              <li>
                <a href="https://twitter.com/amuzen22" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://github.com/ammartin8" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </IconContext.Provider>
        </Row>
      </Container>
      <Container
        id="lowerFooterSection"
        className="lower-footer-container m-0 p-1"
        style={{
          justifyContent: "center",
          maxWidth: "100vw",
          alignItems: "center",
        }}
      >
        <Row style={{ justifyContent: "center" }}>
          <p>Crafted with {<FaHeart />} by Me</p>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <p>{<FaCopyright />} 2020</p>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <p>
            Made with {<FaReact />} React & {<FaBootstrap />} Bootstrap{" "}
          </p>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
