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
            <p>Data Analytics Engineer specializing in modern data workflows (GCP/Azure, dbt, Python). 
              I build scalable ETL pipelines and automate reporting to turn raw data into actionable business intelligence. 
              With a background in high-integrity data analysis, I bring domain knowledge and specialized engineering expertise to organizations of all sizes. 
              I am passionate about honest work cultures that value growth, open to connecting with Engineering Managers looking for hybrid candidates who understand both technical architecture and business value.
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