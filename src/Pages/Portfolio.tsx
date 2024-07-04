import React from "react";
import Layout from "../components/layouts/Layout";
import PortfolioProject from "../components/PortfolioProject";
import { PROJECT_IDS } from "../utils/constants/constants";

const Portfolio = () => {
  return (
    <Layout>
      <h2 className="text-center h1">Portfolio</h2>
      <div id="projects" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
        {PROJECT_IDS.map((projectKey: string) => <PortfolioProject id={projectKey} key={projectKey} />)}
      </div>
    </Layout>
  )
}

export default Portfolio;