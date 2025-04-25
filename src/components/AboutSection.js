import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileimg from "../images/about_img.png";
import pdf from "../files/Data_Engineer_Resume_Amah_Martin.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";


function AboutSection() {
  return (
    <Container
      id="aboutSection"
      className="my-5 mx-auto"
      style={{ justifyContent: "center"}}
    >
      <Row style={{ flexDirection: "column", alignItems: "left" }}>
        <p>About Me</p>
        <h5 style={{fontWeight: "400"}} className="mb-5">I’m a <b>Business Intelligence & Data Engineering Professional</b> that is passionate about improving data processes and creating better data products
        </h5>
      </Row>
      <Row style={{ flexDirection: "row", alignItems: "left" }}>
        <Col lg={4} className="px-4">
            <img src={profileimg} alt="Picture of a window with the word data etched on it" style={{ maxWidth: "300px", height:"auto"}}></img>
        </Col>
        <Col lg={8} style={{ flexDirection: "column", alignSelf:"center"}} className="my-3 px-5">
            <h4>Hello There!</h4>
            <p>I’m a Data Analytics Professional who is passionate about improving data processes and creating better data products. With expertise in Python, SQL, Power BI, and Cloud platforms – I build scalable solutions, automate reporting, and collaborate across teams to deliver measurable improvements. I have a proven track record of developing high-impact dashboards that analyzes millions of customers and serve our business partners.
            </p>
        <Row>
          <a href={pdf} download className="resume-button" alignItems="center">
            <FaCloudDownloadAlt style={{width:"2em"}}/>Download My Resume
          </a>
        </Row>
        </Col>
      </Row>
      
    </Container>
  );
}

export default AboutSection;