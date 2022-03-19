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
  FaLinkedin
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <Container
        id="upperFooterSection"
        className="upper-footer-container m-0 d-flex"
        style={{ justifyContent: "center", flexDirection:"column", maxWidth: "100vw" }}
      >
        <Row style={{justifyContent: "flex-end"}}>
          <a href="#root" style={{ color: "rgb(236, 207, 207)", width: "1em"}}>
            <FaChevronUp style={{ fontSize: "1.5em" }} />
          </a>
        </Row>
        <Row
          className="text-center d-flex"
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={brandLogo} alt="Brand Logo" style={{width:"6em"}}/>
          <p style={{paddingTop: "1em"}}>Building creative solutions through data and software development, one day at a time.</p>
        </Row>
        <Row className="d-flex text-center" style={{justifyContent: "center"}}>
          <IconContext.Provider className="d-flex" value={{ className: "social-icons" }} style={{justifyContent: "center"}}>
            <ul
              className="social-icon-list d-flex"
              style={{justifyContent: "center"}}
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
              <li>
                <a href="https://linkedin.com/in/amahmartin" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </IconContext.Provider>
        </Row>
      </Container>
      <Container
        id="lowerFooterSection"
        className="lower-footer-container m-0 p-1 d-flex"
        style={{
          justifyContent: "center",
          maxWidth: "100vw",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Row className="d-flex" style={{ justifyContent: "center" }}>
          <p style={{ justifyContent: "center", textAlign: "center"}}>Crafted with {<FaHeart />} by Me</p>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <p style={{ justifyContent: "center", textAlign: "center"}}>{<FaCopyright />} 2022</p>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <p style={{ justifyContent: "center", textAlign: "center"}}>
            Made with {<FaReact />} React & {<FaBootstrap />} Bootstrap{" "}
          </p>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
