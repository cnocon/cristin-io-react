import React, { useState, Dispatch, SetStateAction, useMemo, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import WeatherBanner from "../components/WeatherBanner/WeatherBanner";
import PortfolioProject from "../components/PortfolioProject";
import { portfolioProjectData } from "../data/PortfolioData";
import { PROJECT_IDS, PROJECT_COMPONENTS } from "../utils/constants/constants";
const Portfolio = () => {
  const [data, setData]: [data: any, setData: SetStateAction<any>] = useState(null);
  const [query, setQuery]: [query: string, setQuery: Dispatch<SetStateAction<string>>] = useState("");
  const [url, setUrl]: [url: string, setUrl: Dispatch<SetStateAction<string>>] = useState("");
  const [history, setHistory]: [history: any, setHistory: any] = useState({});
  
  const fetchData = async (url: string | null, setUrl: Dispatch<SetStateAction<string>>) => {
    if (url) {
      const response = await fetch(url);
      const json = await response?.json();
      
      if (json) {
        setData(json);
        setHistory({ [query]: json, ...history});
        setUrl("");
      }
    }
  }

  useMemo(async () => {
    const isUrlForOldQuery = url.split(`query=${query}`)?.length === 1;
    if (!data || !isUrlForOldQuery) {
      fetchData(url, setUrl);
    }
  }, [url]);

  return (
    <Layout>
      <h2 className="text-center h1">Projects</h2>
      {PROJECT_IDS.map((projectKey: string) => {
        return (
          <div className="accordion my-5" id="projects">
            <PortfolioProject id={projectKey} key={projectKey} />
          </div>
        );
      })}
    </Layout>
  )
}

export default Portfolio; 