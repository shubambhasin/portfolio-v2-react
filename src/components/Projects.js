import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
import "../styles.css";
const Projects = () => {
  const [projects, setProjects] = useState({});

  return (
    <div className="projects">
      <span className="project-nav">
        <Link to="/projects/design" className="go-to-designs">
          For Design project Click here !
        </Link>
        <Link to="/projects/design" className="go-to-designs-hidden">
          Go to designs !
        </Link>
        <Link
          className="links-circle"
          title="Go to contact section"
          to="/contact"
        >
          <FaPhone size={28} />
        </Link>
      </span>
      <div className="project-container">
        {ProjectData.map((data) => {
          return (
            <div key={data.id} className="tile">
              <div className="tile-1">
                <img
                  className="project-icon"
                  src={data.projectImage}
                  alt="project-icon"
                />
                <div>
                  <h1>{data.projectName}</h1>
                  <small>{data.date}</small>
                  <p>{data.projectInfo1}</p>
                  <p>{data.projectInfo2}</p>
                  <div className="tile-2">
                    <a href={data.appUrl} rel="noreferrer" target="_blank">
                      View Live
                    </a>
                    <a href={data.appCode} rel="noreferrer" target="_blank">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
