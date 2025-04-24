import React from "react";

import { Col } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import {} from "react-icons/fc";

function Header() {
  return (
    <div className="outer-layer-container">
      <div
        id="headerSection"
        className="d-flex main-header-container mb-4"
        style={{
          justifyContent: "center",
          flexDirection: "column",
          justifyItems: "left",
        }}
      >
        <Col
          xs={10}
          md={5}
          lg={5}
          className="subheader-container p-4"
          style={{
            marginLeft: "1.5em",
          }}
        >
          <div className="d-flex hero-content-section">
            <h1 className="">
              <span style={{ fontWeight: "bold", color: "#6C757D" }}>
                HELLO, WORLD.&nbsp;
              </span>
              <span style={{ fontWeight: "bold", color: "#343A40" }}>
                MY NAME <br /> IS AMAH.
              </span>
            </h1>
          </div>
          <div className="">
            <p
              className="my-0"
              style={{ fontSize: "1.5em", fontWeight: "600", color: "#343A40" }}
            >
              Welcome to my portfolio site. <br />{" "}
            </p>
            <div
              className="d-flex"
              style={{ flexDirection: "column", justifyContent: "center" }}
            >
              <a
                href="#aboutSection"
                style={{ color: "rgb(79, 19, 105)", textAlign: "center" }}
              >
                <FaChevronDown
                  className="chevronIcon"
                  style={{
                    fontSize: "1.8em",
                    fontWeight: "600",
                    color: "#6C757D",
                  }}
                />
              </a>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default Header;
