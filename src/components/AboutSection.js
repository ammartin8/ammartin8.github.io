import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileimg from "../images/profile_pic.png"


function AboutSection() {
  return (
    <Container
      id="aboutSection"
      className="my-5 mx-auto"
      style={{ justifyContent: "center"}}
    >
      <Row style={{ flexDirection: "column", alignItems: "left" }}>
        <p>About Me</p>
        <h5 style={{fontWeight: "600"}} className="mb-4">I am a Software Developer that is about data and technology.</h5>
      </Row>
      <Row style={{ flexDirection: "row", alignItems: "left" }}>
        <Col lg={4} className="px-4">
            <img src={profileimg} alt="Portrait of Software Developer" style={{ maxWidth: "300px", height:"auto"}}></img>
        </Col>
        <Col lg={8} style={{ flexDirection: "column", alignSelf:"center"}} className="my-3 px-5">
            <h4>Hello There! I'm Amah Martin</h4>
            <p>I consider myself a Tea lover, Photographer hobbyist, and of course, Software Developer. 
                I love working with data, data visualizations and helping build inclusive 
                technology that helps makes our world a better place.
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;