import React from "react";

const WeatherBanner: React.FC<{data: any}> = ({ data }) => {
  return (
    <section role="banner" className="card">
      <div className="card-body row d-flex justify-content-around">
        <div className="col-auto text-center my-auto mx-auto">
          <h3 className="fw-bolder">{data?.location?.name}</h3>
          <p className="fst-italic">{data?.current?.observation_time}</p>
          <h4>{data?.current?.weather_descriptions?.map((desc: string) => <p className="fw-bolder">{desc}</p>)}{data?.current?.temperature} &deg;C</h4>
          <p className="fst-italic">Feels like {data?.current?.temperature} &deg;C</p>
        </div>
        <div className="col-auto mx-auto my-auto">
          <ul className="list-group text-center">
            <li className="p-0 no-border list-group-item mx-auto">{data && data?.current && data.current?.weather_icons?.length && (
              data.current.weather_icons.map((icon: string | undefined, index: number) => <img className="img my-4 rounded" src={icon} key={icon} alt={data?.current?.weather_descriptions[index]} style={{width: "100%"}} />)
            )}</li>
            <li className="list-group-item"><span className="fw-bolder">Wind: </span> {data?.current?.wind_speed} mph {data?.current?.wind_dir}</li>
            <li className="list-group-item"><span className="fw-bolder">Pressure: </span> {data?.current?.pressure} Pa</li>
            <li className="list-group-item"><span className="fw-bolder">Precipitation: </span> {data?.current?.precip} cm</li>
            <li className="list-group-item"><span className="fw-bolder">Humidity: </span> {data?.current?.precip}%</li>
            <li className="list-group-item"><span className="fw-bolder">Cloud Cover: </span> {data?.current?.precip}%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WeatherBanner;