import React from "react";

import { Container, Row } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";

function CalltoAction() {
  return (
    <Container
      id="hireMe"
      className="pb-4 my-5"
      style={{ justifyContent: "center" }}
    >
      <Row style={{ flexDirection: "column", alignItems: "center" }}>
        <p className="text-center">
          Whether it's designing an unique logo brand for your business,
          providing feedback to better enhance your website and gain new
          customers or bringing your idea to life, it is my goal to make your
          business goals a reality. <br />
          Interested in working together? <br />
          Send me an email at
        </p>
        <p style={{ fontWeight: "400" }}>ammartin8249@gmail.com</p>
        <a href="mailto:ammartin8249@gmail.com">
          <FaEnvelope style={{ fontSize: "1.8em" }} />
        </a>
      </Row>
    </Container>
  );
}

export default CalltoAction;
