import React from "react";
import Header from "./components/Header.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import "./styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <Header />
      <div className="main-content">
        <div className="left-column">
          <Education />
          <Skills />
        </div>
        <div className="right-column">
          <Profile />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default Resume;
