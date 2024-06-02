import React, { useState, Dispatch, SetStateAction, useMemo } from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import WeatherBanner from "../components/WeatherBanner/WeatherBanner";

const WeatherProject: React.FC = () => {
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
    <>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="my-4">Weather Search</h3>
          <p className="mb-4">Search for a city below.</p>
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
              } }
              onKeyDown={(e) => {
                setUrl(e.code === "Enter"
                  ? `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${query}`
                  : ""
                );
              } } />
          </div>
        </div>
        <div className="col-md-9 col-12 mr-auto my-5" role="alert" aria-live="polite" aria-atomic={true}>
          {data?.current && (
            <WeatherBanner data={data} />
          )}
          {data?.success === false && (
            <div className="alert alert-primary">
              <p className="m-0 text-center">No data available for <span className="fw-bolder">{query}</span>.</p>
            </div>
          )}
        </div>
      </div>
      {Object.keys(history)?.length > 1 && (
        <div className="col-12 my-5">
          <h4 className="my-4 font-open-sans fw-normal">Weather App Search History</h4>
          <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex flex-column">
            {Object.values(history)?.map((item: any, index: number) => item !== data && <WeatherCard data={item} key={`weather-card-${index}`} />).filter(i => !!i)}
          </section>
        </div>
      )}
  </>
  )
}

export default WeatherProject; 