import React, {useRef} from "react";
import { FaArrowDown, FaGithub, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import cover from "../images/cover.svg";
import Skills from "./Skills";
import "../styles.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="info">
          <div className="info-div">
            <h1>Shubam Bhasin</h1>
            <p>Web Developer</p>
            <small>JavaScript | React | HTML | CSS </small>
            <br />
            <br />
            <a href="#skills" className="button">
              {" "}
              More Details <FaArrowDown skills={28} />
            </a>
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
      <div id="skills"></div>
      <Skills  />
    </div>
  );
};

export default Home;
