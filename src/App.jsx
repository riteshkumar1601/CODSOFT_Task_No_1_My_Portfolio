import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="container">
        <Hero></Hero>
        <Skills></Skills>
        <ProjectSection></ProjectSection>
        <WorkExperience></WorkExperience>
        <ResumeSection></ResumeSection>
        <ContactMe></ContactMe>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
