import React, { Suspense, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blog1 from "./data/Blogs/Blog1";
import Blog2 from "./data/Blogs/Blog2";
import Blog3 from "./data/Blogs/Blog3";
import "./styles.css";

const LazyProjects = React.lazy(() => import("./components/Projects"));
const LazyDesign = React.lazy(() => import("./components/Design"));
const LazyBlogs = React.lazy(() => import("./components/Blogs"));
export default function App() {
  return (
    <HashRouter>
      <div className={`App`}>
        <Navbar />

        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/contact" exact component={Contact} />
            <Route path="/aboutme" exact component={AboutMe} />
            <Route path="/blogs" exact component={LazyBlogs} />
            <Route path="/projects" exact component={LazyProjects} />
            <Route path="/projects/design" exact component={LazyDesign} />
            <Route path="/" exact component={Home} />
            <Route path="/home" name="home-page" exact component={Home} />
            <Route
              path="/blogs/centering-anything-in-css"
              exact
              component={Blog1}
            />
            <Route path="/blogs/blog2" exact component={Blog2} />
            <Route path="/blogs/blog3" exact component={Blog3} />
          </Suspense>
        </Switch>
      </div>
    </HashRouter>
  );
}
