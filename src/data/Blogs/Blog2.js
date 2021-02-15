import React from "react";
import { BlogsData } from "../BlogsData";

const Blog2 = () => {
  return (
    <div className="blogs">
      <div className="blog-container">
        {BlogsData.map((data) => {
          return data.blogNumber === "2" ? (
            <div key={data.id}>
              <div className="blog-header">
                <h2>{data.blogHeader}</h2>
              </div>
              <div className="blog-date">
                <span>
                  <small>{data.blogDate}</small>
                </span>
              </div>
              <div className="blog-data">
                <p>{data.blog}</p>{" "}
              </div>
              <div className="signature">
                <small>{data.signature}</small>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Blog2;
