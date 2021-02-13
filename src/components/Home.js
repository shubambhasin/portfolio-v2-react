import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import "../styles.css"

const Home = () => {
  return (
    <div>
    <div className="home">
      <div className="info">
        <h1>Shubam Bhasin</h1>
        <p>Web Developer</p>
        <small>JavaScript | React | HTML | CSS </small>
        <br/>
        <br/>
        <a href="#skills" className="button"> More Details <FaArrowDown skills={42}/></a>
      </div>
      <div className="go-to-project">
        <Link to="/projects" className="links">
          Project Section
        </Link>
        <Link className="links" to="/contact">Contact Me</Link>
      </div>
      
    </div>
    <Skills/>
    </div>
  );
};

export default Home;
