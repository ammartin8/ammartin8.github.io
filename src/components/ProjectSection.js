import React from "react";
import Project from "./Project";
import { Container, Row } from "react-bootstrap";
import techLandingSite from "../images/techLandingSite.png";
import photoPortfolioSite from "../images/photoPortfolioSite.png";
import musicLandingSite from "../images/musicLandingSite.png";
import letsEatAppPic from "../images/letsEatApp_crop.JPG";
import moreProjects from "../images/placeimg_864_576_tech.jpg";

let projectlink1 = "http://amahmartin.me/tech-landing-page/";
let projectlink2 = "https://amahmartin.me/photography-portfolio";
let projectlink3 = "http://amahmartin.me/music-landing-page/";
let projectlink4 = "https://github.com/ammartin8/lets-eat-app";
let projectlink5 = "https://github.com/ammartin8";

let projecttitle1 = "Online Tech Form Landing Page";
let projecttitle2 = "Mellow A Photography Portfolio Site";
let projecttitle3 = "Music Marketing Landing Page";
let projecttitle4 = "Let's Eat! Restaurant App";
let projecttitle5 = "More Projects";

/*TODO: Set a min width for cards so text doesn't go outside the box*/

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
        <Project projectlink={projectlink1} projectimg={techLandingSite} projecttitle={projecttitle1}/>
        <Project projectlink={projectlink2} projectimg={photoPortfolioSite} projecttitle={projecttitle2}/>
        <Project projectlink={projectlink3} projectimg={musicLandingSite} projecttitle={projecttitle3}/>
        <Project projectlink={projectlink4} projectimg={letsEatAppPic} projecttitle={projecttitle4}/>
        <Project projectlink={projectlink5} projectimg={moreProjects} projecttitle={projecttitle5}/>
      </Row>
    </Container>
  );
}

export default ProjectSection;
