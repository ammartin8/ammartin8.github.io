import React from "react";

import { Container, Row } from "react-bootstrap";

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
        Do you need assistance in gathering actionable insights about your business, looking for ways to further automate data processes, or build a better business brand?<br />
        </p>
        <a href="mailto:ammartin8842@gmail.com" className="project-button" alignItems="center">
          Get in Touch
        </a>
      </Row>
    </Container>
  );
}

export default CalltoAction;
