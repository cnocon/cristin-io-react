import React, { useState, useEffect, Dispatch, SetStateAction, useMemo, useRef, RefObject, InputHTMLAttributes, LegacyRef } from "react";
import Layout from "../components/layouts/Layout";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { portfolioData } from "./PortfolioData";
import WeatherBanner from "../components/WeatherBanner/WeatherBanner";

const Portfolio = () => {
  const [data, setData]: [data: any, setData: SetStateAction<any>] = useState(null);
  const [query, setQuery]: [query: string, setQuery: Dispatch<SetStateAction<string>>] = useState("");
  const [url, setUrl]: [url: string, setUrl: Dispatch<SetStateAction<string>>] = useState("");
  const [history, setHistory]: [history: any, setHistory: any] = useState({});
  
  const fetchData = async (url: string | null) => {
    if (url) {
      const response = await fetch(url);
      const json = await response?.json();
      setData(json);
      if (Object.keys(json)?.length) {
        if (!history[query]) {
          setHistory(history ? {[query]: json, ...history} : {[query]: json});
        }
      }
    }
  }

  useMemo(async () => {
    fetchData(url);
  }, [url]);
  
  return (
    <Layout>
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="my-4">Weather App</h2>
          <p className="mb-4">Search for a city below.</p>
        </div>
        <div className="col-12 mx-auto">
          <div className="input-group">
            <span className="input-group-text">City</span>  
            <input 
              className="form-control"
              aria-label="city"
              id="city"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyDown={(e) => e.code === "Enter" && setUrl(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${query}`)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mx-auto my-5">
          {data && (
            <WeatherBanner data={data} />
          )}
        </div>
      </div>
      <hr />
      <h3 className="my-4 text-center">Search History</h3>
      <section className="cards-grid">
        {history && Object.values(history).map((item: any) => <WeatherCard data={item} />)}
      </section>
    </Layout>
  )
}

export default Portfolio;