import React from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";

import { FaArrowUp, FaGithub, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import cover from "../images/cover.svg";
import "../styles.css";

const Home = () => {
  return (
    <div>
      <div className={`home`}>
        <div className="info">
          <div className="info-div">
            <h1>Shubam Bhasin</h1>
            <p>Web Developer</p>
            <small>JavaScript | React | HTML | CSS </small>
            <br />
            <br />
            <button href="#skill" className="button">
              {" "}
              Swipe Up <FaArrowUp skills={28} />
            </button>
          </div>
          <div className="cover-container">
            <img src={cover} alt="cover-poster" />
          </div>
        </div>
        <div className="go-to-project">
          <Link to="/projects" className="links">
            Project Section
          </Link>
          <Link to="/projects" className="links-circle">
            <FaGithub size={28} />
          </Link>
          <Link className="links" to="/contact">
            Contact Me
          </Link>
          <Link className="links-circle" to="/contact">
            <FaPhone size={28} />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>

        <div className="skills-section">
          <div className="skill">
            <FaHtml5 size={84} className="html5" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FaCss3 size={70} className="css" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <FaJs size={84} className="js" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FaReact size={84} className="react" />
            <p>React</p>
          </div>
          <div className="skill">
            <FaBootstrap size={84} className="bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="skill">
            <DiPhotoshop size={84} className="photoshop" />
            <p>Adobe Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
