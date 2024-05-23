import React, { useState, useEffect, Dispatch, SetStateAction, useMemo, useRef, RefObject, InputHTMLAttributes, LegacyRef } from "react";
import Layout from "../components/layouts/Layout";
// import { portfolioData } from "./PortfolioData";

const Portfolio = () => {
  const [data, setData]: [data: any, setData: SetStateAction<any>] = useState(null);
  // const [data, setData]: [data: any, setData: SetStateAction<any>] = useState(null);
  const [query, setQuery]: [query: string, setQuery: Dispatch<SetStateAction<string>>] = useState("");
  const [url, setUrl] = useState(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=Tokyo`);
  const [history, setHistory]: [history: any, setHistory: any] = useState({});
  
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    if (Object.keys(json)?.length) {
      if (!history[query]) {
        setHistory(history ? {[query]: json, ...history} : {[query]: json});
      }
    }
  }

  useMemo(async () => {
    if (query?.length) {
      fetchData();
    }
  }, [url]);
  
  return (
    <Layout>
      <h2 className="my-4">Weather App</h2>
      <p className="mb-4">Search for a city below.</p>
      <label>City:&nbsp;
        <input 
          className="form-control"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
          onKeyDown={(e) => {
            return e.code === "Enter" ? setUrl(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${query}`) : null
          }}
        />
      </label>
      <button className="btn btn-secondary" onClick={(e) => {
        setUrl(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${query}`);
      }}>Submit</button>
      <h3 className="my-4">Search History</h3>
      <section className="cards-grid">
        {history && Object.values(history).map((item: any) => (
          <article className="card col-lg-3 col-md-2 col-12 shadow p-4 m-4 bg-body rounded">
            {item && item?.current && item.current?.weather_icons?.length && (
              item.current.weather_icons.map((icon: string | undefined) => <img className="rounded" src={icon} key={icon} alt={item?.current?.weather_descriptions[0]} />)
            )}
            <h3><strong>{item?.location?.name}</strong></h3>
            <h4>{item?.current?.temperature} &deg;C</h4>
            {item?.current?.weather_descriptions?.map((desc: string) => <p>{desc}</p>)}
            <ul className="list">
              <li><strong>Wind: </strong> {item?.current?.wind_speed} mph {item?.current?.wind_dir}</li>
            </ul>
        </article>
        ))}
      </section>
    </Layout>
  )
}

export default Portfolio;