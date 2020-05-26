import React from "react";
import Project from "./Project";
import { Container, Row } from "react-bootstrap";
import techLandingSite from "../images/techLandingSite.png";
import photoPortfolioSite from "../images/photoPortfolioSite.png";
import musicLandingSite from "../images/musicLandingSite.png";
import moreProjects from "../images/placeimg_864_576_tech.jpg";

let projectlink1 = "http://amahmartin.me/tech-landing-page/";
let projectlink2 = "http://amahmartin.me/photographyPortfolio/";
let projectlink3 = "http://amahmartin.me/music-landing-page/";
let projectlink4 = "https://github.com/ammartin8";


function ProjectSection() {
  return (
    <Container
      id="portfolioSection"
      className="d-flex my-5"
      style={{ flexDirection: "column", justifyContent: "center" }}
    >
      <Row style={{ justifyContent: "center" }}>
        <p>Recent Portfolio Projects</p>
      </Row>
      <Row className="d-flex" style={{ justifyContent: "center" }}>
        <Project projectlink={projectlink1} projectimg={techLandingSite}/>
        <Project projectlink={projectlink2} projectimg={photoPortfolioSite}/>
        <Project projectlink={projectlink3} projectimg={musicLandingSite}/>
        <Project projectlink={projectlink4} projectimg={moreProjects}/>
      </Row>
    </Container>
  );
}

export default ProjectSection;
