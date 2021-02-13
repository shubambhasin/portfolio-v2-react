import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="links">Home</Link>
      <Link to="/projects" className="links">Projects</Link>
      <Link to="/blogs" className="links">Blogs</Link>
      <Link to="/aboutme" className="links">About me</Link>
      <Link to="/contact" className="links" id="contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
