import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DesignData } from "../data/DesignData";
import "../styles.css";
const Design = () => {
  return (
    <div className="design">
      <div className="design-header">
        <h1>
          I am design
        </h1>
        <Link to="/projects/" className="backToMain">
          <FaArrowAltCircleLeft size={28}  title='Back to project' />
        </Link>
      </div>
      <div className="design-container">
        {DesignData.map((design) => {
          return (
            <div key={design.id} className="designs">
              <img src={design.projectImage} alt="somePic-for-project" />
              <h1>{design.projectName}</h1>
              <p>{design.projectInfo1}</p>
              <p>{design.projectInfo2}</p>
              <a
                className="primary-button"
                href={design.appUrl}
                rel="noreferrer"
                target="_blank"
              >
                View Live
              </a>
              <a
                className="primary-button"
                href={design.appCode}
                rel="noreferrer"
                target="_blank"
              >
                View Code
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Design;
