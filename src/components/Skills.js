import React from "react";
import "./style/Skills.css";
import "../App.css";
import Navbar from "./Navbar";
import './style/Navbar.css'
import SkillsList from './SkillsList.js'
import SkillsLogos from './SkillsLogos.js'

function Skills() {
  return (
    <div>
      <Navbar />
      <SkillsList />
      <SkillsLogos />
    </div>
  );
}

export default Skills;