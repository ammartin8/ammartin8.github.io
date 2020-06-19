import React, { Component } from "react";
import Skill from "./Skill";
import { Container } from "react-bootstrap";
import {
  FaCode, FaChartLine, FaDatabase
} from "react-icons/fa";

let dataContent = [
  "Data Analysis",
  "Data Visualization",
  "Statistical Analysis Software (SAS)",
  "Geographical Information Systems",
  "(QGIS & ArcGIS)",
];
let devContent = [
  "React JS",
  "HTML, CSS, Javascript",
  "JQuery",
  "Bootstrap Framework",
  "Git",
  "Github"
];
let backEndContent = [
  "SQL",
  "REST APIs",
  "Python",
  "Node JS",
  "Redis",
  "Linux OS"
];
let dataListItems = dataContent.map((item) => <li>{item}</li>);
let devListItems = devContent.map((item) => <li>{item}</li>);
let backEndListItems = backEndContent.map((item) => <li>{item}</li>);

let dataProjectContent = [
  "Data Visualization",
  "Data Storytelling",
  "Geographical Mapping",
  "Data & Statistical Analysis"
];
let devProjectContent = [
  "Business Websites",
  "Product Landing Pages",
  "UX/UI Design",
  "Web/Mobile Applications",
];
let backEndProjects = [
  "Database Development",
  "Create Read Update Delete Applications",
  "Website and API data Integrations",
];

let dataProjectItems = dataProjectContent.map((item) => <li>{item}</li>);
let devProjectItems = devProjectContent.map((item) => <li>{item}</li>);
let backEndItems = backEndProjects.map((item) => <li>{item}</li>);

class SkillsSection extends Component {
  render() {
    return (
      <>
        <Container id="skillSection"
          className="d-flex flex-wrap mx-auto px-0 my-5"
          style={{
            minWidth: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skill
            header={"Data & Business Analytics"}
            content={dataListItems}
            projects={dataProjectItems}
            imageIcon={<FaChartLine />}
          />
          <Skill
            header={"Front-End Development"}
            content={devListItems}
            projects={devProjectItems}
            imageIcon={<FaCode />}
          />
          <Skill
            header={"Back-End Development"}
            content={backEndListItems}
            projects={backEndItems}
            imageIcon={<FaDatabase />}
          />
        </Container>
      </>
    );
  }
}

export default SkillsSection;
