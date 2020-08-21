import React from "react";
import { Col, Card, Button } from "react-bootstrap";

function Project(props) {
  return (
    <Col
      xs={12}
      md={5}
      lg={3}
      className="m-3 d-flex"
      style={{ justifyContent: "center" }}
    >
      <Card className="project-card" style={{ width: "18rem" }}>
        <a href={props.projectlink} target="_blank" rel="noopener noreferrer">
          <Card.Img
            variant="top"
            src={props.projectimg}
            style={{ width: "100%", height: "auto" }}
            alt="Project Image"
          />
        </a>
        <Card.Body className="card-content-section">
          <Card.Title style={{ fontSize: "1.2em", fontWeight: "600" }}>
            {props.projecttitle}
          </Card.Title>
          <Card.Text style={{ fontSize: "1.2em", fontWeight: "300" }}>
            {props.projectdesc}
          </Card.Text>
          <a href={props.projectlink} className="project-button" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;
