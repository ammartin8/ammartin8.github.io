import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileimg from "../images/about_img.png";
import pdf from "../files/Amah_Martin_Data_Analytics_Engineer.pdf";
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
        <h5 style={{fontWeight: "400"}} className="mb-5"><b>Data Analytics Engineer | Building Scalable Infrastructure for Data-Driven Decision Making</b>
        </h5>
      </Row>
      <Row style={{ flexDirection: "row", alignItems: "left" }}>
        <Col lg={4} className="px-4">
            <img src={profileimg} alt="Picture of a window with the word data etched on it" style={{ maxWidth: "300px", height:"auto"}}></img>
        </Col>
        <Col lg={8} style={{ flexDirection: "column", alignSelf:"center"}} className="my-3 px-5">
            <h4>Hello There!</h4>
            <p>I am a Data Analytics Engineer with over 7 years of experience bridging the gap between complex business logic and scalable cloud infrastructure. My career began in public health as an Epidemiologist, where I mastered data integrity and compliance, before transitioning into full-stack Data Engineering at large-scale enterprises like Humana.
              My mission is to move organizations from simply using data to actively building it for mid-to-large sized enterprises. I specialize in modern analytical engineering workflows, combining domain expertise with technical rigor to architect robust data platforms.
            </p>
            <p>
              <b>Core Expertise:</b>
              <ul>
                <li><b>Languages & Logic</b>: SQL, Python, PySpark, Bash, SAS</li>
                <li><b>Cloud & Infrastructure</b>: Google Cloud Platform (GCP), Azure, Terraform, Docker, Git</li>
                <li><b>Engineering Tools</b>: dbt, Airflow, Power BI, Databricks</li>
              </ul>
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