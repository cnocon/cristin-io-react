import React from "react";
import "./header.module.scss";
import { Link, NavLink } from "react-router-dom";
import illustration from "../assets/illustration.svg";
import "./header.module.scss";

const Header = () => {
  return (
    <header>

      <h1>
        <Link to="/">
          <img className="avatar" src={illustration} alt="Cristin O'Connor" />
          <span>Cristin O'Connor</span>
          <p>Frontend Software Engineer</p>
        </Link>

      </h1>
      <nav>
        <ul>
          <li><NavLink to="/resume">Résumé</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
