import React from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: block;
  text-decoration: none;
  border-bottom: 1px solid inherit;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 0;
  flex-wrap: wrap;
  margin: 0 auto 1rem;
`;

export const Home = () => {
  const linkStyle = {
    display: "block",
    textDecoration: "none",
    borderBottom: "1px solid inherit",
    alignItems: "center",
    justifyContent: "center",

  }
  return (
    <Layout>
    <h2 style={{textAlign: "center", paddingLeft: 0, textTransform: "uppercase", fontWeight: 800, fontFamily: "Lato, sans-serif" }}>
      About Me
    </h2>
    <StyledContainer>
      <Link to="/resume" style={linkStyle}>Resume</Link>
      <Link to="/writing-sample" style={linkStyle}>Writing Sample</Link>
      <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
    </StyledContainer>

    <h2 style={{textAlign: "center", paddingLeft: 0, textTransform: "uppercase", fontWeight: 800, fontFamily: "Lato, sans-serif" }}>
      Contact Me
    </h2>
    <StyledContainer>
      <Link to="https://github.com/cnocon" rel="noopener noreferrer" target="_blank" style={linkStyle}>GitHub</Link>
      <Link to="https://codepen.io/cnocon" rel="noopener noreferrer" target="_blank" style={linkStyle}>Codepen</Link>
      <Link to="https://www.linkedin.com/in/cristinoconnor/" rel="noopener noreferrer" target="_blank" style={linkStyle}>LinkedIn</Link>
    </StyledContainer>
    </Layout>
    )
  }