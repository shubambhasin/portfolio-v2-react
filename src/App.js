import { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Design from "./components/Design";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Blog1 from "./data/Blogs/Blog1";
import Blog2 from "./data/Blogs/Blog2";
import Blog3 from "./data/Blogs/Blog3";

import "./styles.css";

export default function App() {
  return (
    <HashRouter>
      <div className={`App`}>
        <Navbar />

        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/design" exact component={Design} />
          <Route path="/" exact component={Home} />
          <Route path="/home" name="home-page" exact component={Home} />
          <Route path="/blogs/blog1" exact component={Blog1} />
          <Route path="/blogs/blog2" exact component={Blog2} />
          <Route path="/blogs/blog3" exact component={Blog3} />
        </Switch>
      </div>
    </HashRouter>
  );
}
