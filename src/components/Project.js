import React from "react";
import { Col, Card, Button } from "react-bootstrap";

function Project(props) {
  return (
    <Col
      xs={12}
      md={4}
      lg={3}
      className="m-3 d-flex"
      style={{ justifyContent: "center" }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.projectimg} style={{width: "100%", height: "auto"}} />
        <Card.Body>
          <Card.Title>{props.projecttitle}</Card.Title>
          <Card.Text style={{ fontSize: "1.5em" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href={props.projectlink} target="_blank" rel="noopener noreferrer">
            <Button variant="dark">Go To Website</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;
