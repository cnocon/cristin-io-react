import React from "react";
import Layout from "../components/layouts/Layout";
import PortfolioProject from "../components/PortfolioProject";
import { PROJECT_IDS } from "../utils/constants/constants";
import PageTitle from "../components/PageTitle";
import FlexWrapper from "../components/FlexWrapper";

const Portfolio = () => {
  return (
    <Layout>
      <PageTitle text="Portfolio" />
      <FlexWrapper wrap={true} id="portfolio-projects">
        {PROJECT_IDS.map((projectKey: string) => 
          <PortfolioProject id={projectKey} key={projectKey} />
        )}
      </FlexWrapper>
    </Layout>
  )
}

export default Portfolio;