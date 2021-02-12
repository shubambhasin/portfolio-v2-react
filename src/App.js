import { HashRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./styles.css";

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar/>
       

        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/" component={Home} />
        </Switch>
        <Skills/>

      </div>
    </HashRouter>
  );
}
