import React from "react";
import "../styles.css";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { DiPhotoshop } from 'react-icons/di'
import "../styles.css"
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>

      <div className="skills-section">
        <div className="skill">
          <FaHtml5 size={84} className="html5" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaCss3 size={70}  className="css" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FaJs size={84}  className="js" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact size={84}  className="react" />
          <p>React</p>
        </div>
        <div className="skill">
          <FaBootstrap size={84}  className="bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <DiPhotoshop size={84} className="photoshop"/>
          <p>Adobe Photoshop</p>
        </div>


      </div>
    </div>
  );
};

export default Skills;
