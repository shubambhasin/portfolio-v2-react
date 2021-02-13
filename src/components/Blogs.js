import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaQuora
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BlogData } from "../data/BlogsData";
import "../styles.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog-container">
        <div className="author-info">
          <h1>
            Blogs by <strong>Shubam Bhasin</strong>
          </h1>
          <p>
            <small>Web Developer | Programmer</small>
          </p>
          <div className="social">
            <a
              style={{ color: "rgb(184, 0, 9) " }}
              href="https://instagram.com/shubambhasin"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram size={28} />
            </a>
            <a
              style={{ color: "rgb(0, 68, 255)" }}
              href="https://instagram.com/shubambhasin"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin  size={28}/>
            </a>
            <a
              style={{ color: "rgb(32, 32, 32)" }}
              href="https://instagram.com/shubambhasin"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub size={28} />
            </a>
            <a
              style={{ color: "rgb(155, 0, 0)" }}
              href="https://instagram.com/shubambhasin"
              rel="noreferrer"
              target="_blank"
            >
              <FaQuora size={28} />
            </a>
          </div>
        </div>
        {BlogData.map((data) => {
          return (
            <div key={data.id} className="blog-tile">
              <div className="blog-header">
                <Link to="/blogs">
                  {" "}
                  <h1>{data.blogHeader}</h1>
                </Link>
              </div>
              <p>
                <small>{data.blogDate}</small>
              </p>
              <p>{data.blogScript}</p>
              <Link to="/blogs" className="read-more">
                <strong>Read more...</strong>
              </Link>
              <hr className="hr" size={1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
