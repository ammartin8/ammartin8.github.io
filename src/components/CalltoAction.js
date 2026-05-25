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
        <p className="text-center"><b>Are you ready to modernize your data infrastructure?</b></p>
        <p className="text-center">
       I thrive in mission-driven environments where I can take on the challenge of building solutions to solve inefficient processes and gather business intelligence that reveals challenges 
       to guide success. Whether you are looking to automate reporting, improve data quality, or architect scalable cloud pipelines, 
       I bring a hybrid perspective that understands both technical architecture and business value.<br />
        </p>
      </Row>
      <br />
      <Row style={{ flexDirection: "column", alignItems: "center" }}>
        <p className="text-center"><b>Let's Connect</b></p>
        <p>
          <ul>
            <li><b>Open to Opportunties</b>: Discussing how my experience in enterprise-scale data environments can help your engineering team deliver faster, more accurate insights.</li>
            <li><b>View My Work</b>: Check out my Cloud-Native ETL Infrastructure Portfolio at <a href="https://github.com/ammartin8/storage_metrics_etl_orchestration" target="_blank" rel="noopener noreferrer">GitHub</a>.</li>
            <li><b>Connect</b>: Reach out on <a href="https://linkedin.com/in/amahmartin" target="_blank" rel="noopener noreferrer">LinkedIn</a> to discuss how we can collaborate or build better data products together.</li>
          </ul>
          <br />
          <i>I believe in honest work, growth-oriented cultures, and meaningful projects that leave a lasting impact.</i>
        </p>
        <a href="mailto:ammartin8842@gmail.com" className="project-button" alignItems="center">
          Get in Touch
        </a>
      </Row>
    </Container>
  );
}

export default CalltoAction;
