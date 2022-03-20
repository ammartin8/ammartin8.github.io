import React from "react";
import { Card, Col, Row, Accordion } from "react-bootstrap";




function Skill(props) {
  return (
    <Accordion.Item eventKey={props.eventKey}>
      <Accordion.Header>{props.imageIcon}&nbsp;{props.header}</Accordion.Header>
      <Accordion.Body>
        {props.content}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Skill;
