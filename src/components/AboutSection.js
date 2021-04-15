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
        <h5 style={{fontWeight: "400"}} className="mb-4">I am a Data Specialist with experience in data analysis, data visualization
        , as well as Python, SQL programming, and Tableau. 
        I am inspired by the potential to think deeply about a problem or process via data to develop 
            solutions or optimize systems. With my openness to listening to others and adaptability, 
            I find great satisfaction in working with a team to develop creative and useful solutions.
        </h5>
      </Row>
      <Row style={{ flexDirection: "row", alignItems: "left" }}>
        <Col lg={4} className="px-4">
            <img src={profileimg} alt="Portrait of Software Developer" style={{ maxWidth: "300px", height:"auto"}}></img>
        </Col>
        <Col lg={8} style={{ flexDirection: "column", alignSelf:"center"}} className="my-3 px-5">
            <h4>Hello There! I'm Amah!</h4>
            <p>I consider myself an avid Tea Drinker, Photographer Hobbyist, and of course, a Data Specialist.
            What attracted me most to data analytics and engineering is my passion 
        of lifelong learning in the area of data and programming, 
        the excitement of discovering the story behind the data that teaches 
        myself and others about our world and how I can make positive 
        contributions towards it, as well as my ambition to expand my 
        personal growth and curiosity.
            
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;