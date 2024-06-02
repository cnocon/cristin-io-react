import React from "react";

const WeatherBanner: React.FC<{data: any}> = ({ data }) => {
  return (
    <section role="banner" className="card border rounded shadow-lg">
      <div className="row">
        <div className="col-auto mx-auto text-center">
          {data && data?.current && data.current?.weather_icons?.length && (
              data.current.weather_icons.map((icon: string | undefined, index: number) => <img className="img my-4 rounded" src={icon} alt={data?.current?.weather_descriptions[index]} style={{width: "100%"}} key={`weather-card-component-${index}`}/>)
            )}
          <h2 className="fw-bolder">{data?.location?.name}</h2>
          <p>{data?.current?.observation_time}</p>
        </div>
      </div>
      <div className="card-body row d-flex justify-content-around">
        <div className="col-auto mx-auto my-auto">
          <ul className="list-group-flush p-0">
            <li className="list-group-item p-0"><span className="fw-bolder">Wind: </span> {data?.current?.wind_speed} mph {data?.current?.wind_dir}</li>
            <li className="list-group-item"><span className="fw-bolder">Pressure: </span> {data?.current?.pressure} Pa</li>
            <li className="list-group-item"><span className="fw-bolder">Precipitation: </span> {data?.current?.precip} cm</li>
            {/* <li className="list-group-item"><span className="fw-bolder">Humidity: </span> {data?.current?.precip}%</li>
            <li className="list-group-item"><span className="fw-bolder">Cloud Cover: </span> {data?.current?.precip}%</li> */}
          </ul>
        </div>
        <div className="col-auto text-center my-auto mx-auto">
          <h3 className="fw-bolder">{data?.current?.weather_descriptions?.map((desc: string, index: number) => <span key={`${desc}-${index}`}>{desc}<br/>{data?.current?.temperature} &deg;C</span>)}</h3>
          <p>Feels like {data?.current?.feelslike} &deg;C</p>
        </div>
        <div className="col-auto mx-auto my-auto">
          <ul className="list-group-flush p-0">
            <li className="list-group-item"><span className="fw-bolder">Humidity: </span> {data?.current?.precip}%</li>
            <li className="list-group-item"><span className="fw-bolder">Cloud Cover: </span> {data?.current?.precip}%</li>
            <li className="list-group-item"><span className="fw-bolder">UV Index: </span> {data?.current?.uv_index}%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WeatherBanner;