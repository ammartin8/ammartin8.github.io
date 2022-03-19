import React, { Component } from "react";
import Skill from "./Skill";
import { Accordion, Container, Row } from "react-bootstrap";
import {
  FaCode, FaChartLine, FaDatabase
} from "react-icons/fa";

let languageContent = [
  "Python",
  "SQL",
  "M Query",
  "DAX",
  "React",
  "HTML, CSS, JavaScript",
  "jQuery"
];
let databaseContent = [
  "PostgreSQL",
  "SQLite",
  "Oracle",
  "IMB Db2 Cloud",
  "Redis"
];
let toolsContent = [
  "Anancoda",
  "Jupyter Notebook",
  "Microsoft Power BI",
  "Git",
  "GitHub",
  "Statistical Analysis Software (SAS)",
  "Toad Data Point & Oracle",
  "Microsoft Databricks",
  "Azure DevOps",
  "Power Query",
  "CRM Storefront",
  "Visual Studio Code",
  "Tableau",
  "Figma"
];

let softSkillContent = [
  "Data Analysis",
  "Data Quality Assurance",
  "Agile Methodology",
  "Technical Writing",
  "Automation",
  "Project Management",
  "Teamwork",
  "Problem Solving",
  "Troubleshooting",
  "Customer Service"
];

let dataLanguages = languageContent.map((item) => <li style={{fontSize: ".9em"}}>{item}</li>);
let databaseList = databaseContent.map((item) => <li style={{fontSize: ".9em"}}>{item}</li>);
let toolsList = toolsContent.map((item) => <li style={{fontSize: ".9em"}}>{item}</li>);
let softSkillList = softSkillContent.map((item) => <li style={{fontSize: ".9em"}}>{item}</li>);

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

let dataProjectItems = dataProjectContent.map((item) => <li style={{fontSize: ".9em"}}>{item}</li>);
let devProjectItems = devProjectContent.map((item) => <li style={{fontSize: ".9em"}}>{item}</li>);
let backEndItems = backEndProjects.map((item) => <li style={{fontSize: ".9em"}}>{item}</li>);

class SkillsSection extends Component {
  render() {
    return (
      <>
        <Container id="skillSection"
          className="d-flex flex-wrap mx-auto px-0 my-0 "
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >

      <Row style={{ justifyContent: "center"}}>
        <p style={{ textAlign: "center", fontSize: "1.5em"}}>Skills</p>
      </Row>

          <Accordion>
          <Skill
            header={"Programming Languages, Frameworks & Libraries"}
            content={dataLanguages}
            projects={dataProjectItems}
            imageIcon={<FaChartLine />}
            eventKey={0}
          />
          <Skill
            header={"Databases"}
            content={databaseList}
            projects={devProjectItems}
            imageIcon={<FaCode />}
            eventKey={1}
          />
          <Skill
            header={"Tools & Systems"}
            content={toolsList}
            projects={backEndItems}
            imageIcon={<FaDatabase />}
            eventKey={2}
          />
          <Skill
            header={"Interpersonal Skills"}
            content={softSkillList}
            projects={backEndItems}
            imageIcon={<FaDatabase />}
            eventKey={3}
          />
          </Accordion>
        </Container>
      </>
    );
  }
}

export default SkillsSection;
