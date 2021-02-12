import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div class="info">
        <h1>Shubam Bhasin</h1>
        <p>Web Developer</p>
        <small>JavaScript | React | HTML | CSS </small>
      </div>
      <div class="go-to-project">
        <Link to="/projects" className="links">
          Project Section
        </Link>
        <Link className="links">Contact Me</Link>
      </div>
    </div>
  );
};

export default Home;
