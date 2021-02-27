import React from "react";
import { BlogsData } from "../BlogsData";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter'
import {gradientDark, solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const gfm = require("remark-gfm");

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style = {solarizedDark} language={language} children={value}/>
  }
}

const markdown1 = `
~~~
<div class="center">
  <button>Center Button</button>
</div>

.center
{
  display: grid;
  place-items: center;
  height: 100vh;
}
~~~`

const Blog1 = () => {
  return (
    <div className="blogs">

      <div className="blog-container">
      <h1>Centering anything in CSS</h1>
      <p>For most of the developer, centering a button, a div etc have been a tedious work altogether. I have read in comment section of the developer articles, on number of blogs people even sarcastically they say we have to search every time we want to center anything.</p>
      <p>But I found a simple small 5 lines piece of code that can literally center anything in CSS, like anything. Any guesses how ?</p>
      <p>Yes, may be some of you guessed it right ! Using CSS Grids 😅😅</p>

      <h3>Have a look at the code first, then I will explain what is happening </h3>
      <ReactMarkdown className="markdown" renderers={renderers} children={markdown1}/>
      
      <ReactMarkdown>Here we have a ***div*** with class = "***center***". and then inside it we have a ***button*** which we want to center. 
       </ReactMarkdown>
       <ReactMarkdown>So what we do is we make the div with class ***center*** as a **grid** by using the property 
         "**Display**: ***grid***", this makes the div container as a grid
         in CSS and after we say "**place-items** : ***center***", css tries to horizontally and vertically center the button element inside the div. 
         This will center your button or anything else that you want to center 😎😎 </ReactMarkdown>
         <ReactMarkdown> But now we have a problem since the initial height of an element is it default height so for now it will only center it horiontally. For making it vertically center we have to make the height of the to 100vh to make if properly center. Or you can choose any height as per your need.</ReactMarkdown>
      
      <p>Happy Coding</p>
      <small>Shubam Bhasin</small>
      </div>

      {/* <div className="blog-container">
        {BlogsData.map((data) => {
          return data.blogNumber === "1" ? (
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
      </div> */}
    </div>
  );
};

export default Blog1;
