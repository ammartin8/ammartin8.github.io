import React from "react";
import Project from "./Project";
import { Container, Row } from "react-bootstrap";
import productLandingSite from "../images/pro-land-page.png";
import photoPortfolioSite from "../images/photoPortfolioSite.png";
import musicLandingSite from "../images/techDocSiteFinal.JPG";
import letsEatAppPic from "../images/letsEatApp_crop.JPG";
import tableaudatabreach from "../images/tableau_main_mini.PNG";
import moreProjects from "../images/placeimg_864_576_tech.jpg";

let projectlink1 = "http://amahmartin.me/jt-travel-product-landing-page/";
let projectlink2 = "https://amahmartin.me/photography-portfolio";
let projectlink3 = "http://amahmartin.me/technical-doc-page/";
let projectlink4 = "https://github.com/ammartin8/lets-eat-app";
let projectlink5 = "https://public.tableau.com/views/HealthcareDataBreachesintheUnitedStates/DataBreaches?:language=en&:display_count=y&:origin=viz_share_link"
let projectlink6 = "https://github.com/ammartin8";

let projecttitle1 = "Japan Travel Agency Landing Page";
let projecttitle2 = "Mellow A Photography Portfolio Site";
let projecttitle3 = "Git Technical Documentation Page";
let projecttitle4 = "Let's Eat! Restaurant App";
let projecttitle5 = "Data Analysis on US Healthcare Data Breaches";
let projecttitle6 = "More Projects";

let projectdesc1 = "A Professional Web Responsive Product Landing Page using HTML, CSS, JavaScript";
let projectdesc2 =
  "A Photography Portfolio Website built with Bootstrap, jQuery";
let projectdesc3 =
  "A Clean Layout Technical Documentation Page Using CSS Grid";
let projectdesc4 =
  "An application that allows you to search for restaurants by city. Built with React JS, Bootstrap, and REST API";
let projectdesc5 = "A data analysis overview of data breach and security events using Python and Tableau";
let projectdesc6 = "Want to view more? Click to go to my GitHub Account";

function ProjectSection() {
  return (
    <Container
      fluid
      id="portfolioSection"
      className="d-flex my-5"
      style={{ flexDirection: "column", justifyContent: "center" }}
    >
      <Row style={{ justifyContent: "center" }}>
        <p>Recent Portfolio Projects</p>
      </Row>
      <Row className="d-flex" style={{ justifyContent: "center" }}>
        <Project
          projectlink={projectlink1}
          projectimg={productLandingSite}
          projecttitle={projecttitle1}
          projectdesc={projectdesc1}
        />
        <Project
          projectlink={projectlink2}
          projectimg={photoPortfolioSite}
          projecttitle={projecttitle2}
          projectdesc={projectdesc2}
        />
        <Project
          projectlink={projectlink3}
          projectimg={musicLandingSite}
          projecttitle={projecttitle3}
          projectdesc={projectdesc3}
        />
        <Project
          projectlink={projectlink4}
          projectimg={letsEatAppPic}
          projecttitle={projecttitle4}
          projectdesc={projectdesc4}
        />
        <Project
          projectlink={projectlink5}
          projectimg={tableaudatabreach}
          projecttitle={projecttitle5}
          projectdesc={projectdesc5}
        />
        <Project
          projectlink={projectlink6}
          projectimg={moreProjects}
          projecttitle={projecttitle6}
          projectdesc={projectdesc6}
        />
      </Row>
    </Container>
  );
}

export default ProjectSection;
