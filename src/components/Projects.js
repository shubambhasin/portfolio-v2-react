import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
import "../styles.css"
const Projects = () => {
  const [projects, setProjects] = useState({});

  return (
    <div className="projects">

      <Link to="/projects/design">For Design project Click here !</Link>

      <div className="project-container">
        {ProjectData.map((data) => {
          return (
            <div key={data.id} className="tile">
              <img
                className="project-icon"
                src={data.projectImage}
                alt="project-icon"
              />
              <h1>{data.projectName}</h1>
              <small>{data.date}</small>
              <p>{data.projectInfo1}</p>
              <p>{data.projectInfo2}</p>
              <a href={data.appUrl}>View Live</a>
              <a href={data.appCode}>View Code</a>
            </div>
          );
        })} 
      </div>
    </div>
  );
};

export default Projects;
