import React from "react";
import "./style/Skills.css";
import "../App.css";
import Navbar from "./Navbar";
import './style/Navbar.css'

function Skills() {
  return (
    <div>
      <Navbar />
      <div className = 'Skills'>
        <h1>Skills</h1>
        <ul className='SkillsList'>
          <li>Javascript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JQuery</li>
          <li>Responsive UI</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>Sequelize</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Adobe Photoshop/Illustrator</li>
          <li>Audio Production</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
