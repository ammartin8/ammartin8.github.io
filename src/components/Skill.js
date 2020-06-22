import React from "react";
import { Card, Col, Row } from "react-bootstrap";




function Skill(props) {
  return (
    <Col
      xs={12}
      md={4}
      className="d-flex my-3"
      style={{ height: "40em", justifyContent: "space-around" }}
    >
      <Card
        className="mx-1 text-center skill-card"
        style={{ height: "40em", maxWidth: "25em" }}
      >
        <Card.Header style={{minHeight: "4em"}}>{props.header}</Card.Header>
        <Card.Body>
          <Row style={{ flexDirection: "column", minHeight: "18em", maxHeight: "18em" }}>
            <Card.Title>
              <p>Techincal Skills</p>
              <span style={{fontSize: "2em"}}>{props.imageIcon}</span>
            </Card.Title>
            <Card.Text>
              <ul>{props.content}</ul>
            </Card.Text>
          </Row>
          <br />
          <Row style={{ flexDirection: "column", height: "15em" }}>
            <Card.Title>
              <p>Projects I Enjoy Working On</p>
            </Card.Title>
            <Card.Text>
              <ul>{props.projects}</ul>
            </Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Skill;
