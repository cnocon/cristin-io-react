import React from "react";
import "./header.module.scss";
import { NavLink } from "react-router-dom";
import illustration from "../assets/illustration.svg";

const Header = () => {
  return (
    <header>
      <img src={illustration} alt="Cristin O'Connor" />
      <h1>
        Cristin O'Connor
        <p>Frontend Software Engineer</p>
      </h1>
      <nav>
        <ul>
          <li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
