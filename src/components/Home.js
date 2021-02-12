import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <h1>Shubam Bhasin</h1>
        <p>Web Developer</p>
        <small>JavaScript | React | HTML | CSS </small>
      </div>
      <div className="go-to-project">
        <Link to="/projects" className="links">
          Project Section
        </Link>
        <Link className="links" to="/contact">Contact Me</Link>
      </div>
    </div>
  );
};

export default Home;
