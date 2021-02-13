import React from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../data/BlogsData";
import "../styles.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog-container">
        {BlogData.map((data) => {
          return (
            <div className="blog-tile">
              <div className="blog-header">
               <Link> <h1>{data.blogHeader}</h1></Link>
              </div>
              <p>
                <small>{data.blogDate}</small>
              </p>
              <p>{data.blogScript}</p>
              <Link className="read-more">
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
