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
        I thrive in environments that allow me to take on the challenge of building solutions to solve inefficient processes and gather business intelligence 
        that reveal challenges and guide business success.
        I aspire to work for an organization 
        that is mission-driven and values growth, an honest-work culture, 
        and meaningful work. <br /><br />
        Interested in learning more about me or talking about data and code? <br />
        Let's Connect!
        </p>
        <p style={{ fontWeight: "600" }}>ammartin8842@gmail.com</p>
        <a href="mailto:ammartin8842@gmail.com">
          <FaEnvelope style={{ fontSize: "1.8em" }} />
        </a>
      </Row>
    </Container>
  );
}

export default CalltoAction;
