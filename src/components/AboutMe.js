import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1>Who AM I ?</h1>

      <div className="info-and-img">
        <div className="small-info">
          <p>
            <strong>Shubam Bhasin</strong>
            <br />
            <small>React | Javascript | Express | MongoDB</small>
            <br />
            <small>HTML | CSS | Bootstrap | Styled-Components </small>
          </p>
        </div>
        <div className="my-image">
          <img
            // src="https://semantic-ui.com/images/avatar2/large/matthew.png"
            src="https://images.pexels.com/users/avatars/1091152/shubam-bhasin-570.jpeg?auto=compress&fit=crop&h=256&w=256"
            alt="meri-shakal"
          />
        </div>
      </div>

      <div className="my-info">
        <p>
          I am a Web developer, Programmer and a Tech Blogger currently living
          in Union territory of Jammu and Kashmir. I have done my B.Tech in
          Electronics and Communication Engineering from NIT Srinagar. Apart
          from that I have keen interest in Web, Web Apps. These days I am in ❤️
          with JavaScript and its Frameworks. So each day I dive in the world of
          JavaScript and take a chunk out of it. Actively Learning them and
          applying them. You can click on the project section to have a look on
          number of things I have made. Or click Below.
        </p>
        <Link
          to="/projects"
          title="Go directly to project section"
          className="links"
        >
          Project Section
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
