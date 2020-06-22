import React, { Component } from "react";
import Header from "./Header";
import NavbarHeader from "./NavbarHeader";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import CalltoAction from "./CalltoAction";

import "../App.css";
import "../normalize.css";

class App extends Component {
  render() {
    return (
      <>
        <NavbarHeader />
        <Header />
        <SkillsSection />
        <ProjectSection />
        <CalltoAction />
        <Footer />
      </>
    );
  }
}

export default App;
