import React from "react";
import { Col, Image } from "react-bootstrap";

function Project(props) {
    return (
        <Col
        xs={12}
        md={4}
        className="m-2 d-flex"
        style={{ justifyContent: "center" }}
      >
        <a href={props.projectlink} target="_blank" rel="noopener noreferrer">
          <Image src={props.projectimg} alt="Project page" rounded fluid style={{height: "12em", width: "auto"}}></Image>
        </a>
      </Col>
    );
}

export default Project;