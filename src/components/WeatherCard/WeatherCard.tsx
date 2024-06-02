import React from "react";

const WeatherCard: React.FC<{data: any}> = ({ data }) => {
  return (
    <article className="card shadow bg-body rounded flex-fill m-2">
      {/* {data && data?.current && data.current?.weather_icons?.length && (
        data.current.weather_icons.map((icon: string | undefined) => <img className="rounded shadow-lg" src={icon} key={icon} alt={data?.current?.weather_descriptions[0]} />)
      )} */}
      <h3 className="card-title text-center my-4 pb-0">
        {data?.location?.name}
        <p className="fw-normal p-0 fs-5 my-0 mt-1">{data?.current?.temperature} &deg;Celsius</p>
      </h3>
      
      <div className="card-body text-center pt-0">
        {data?.current?.weather_descriptions?.map((desc: string) => <h5 className="fs-3 fw-bolder mb-4" key={desc}>{desc}</h5>)}
        <ul className="list-group">
          <li className="fs-5 list-group-item"><span className="fw-bolder">Wind: </span> {data?.current?.wind_speed} mph {data?.current?.wind_dir}</li>
            <li className="fs-5 list-group-item"><span className="fw-bolder">Pressure: </span> {data?.current?.pressure} Pa</li>
            <li className="fs-5 list-group-item"><span className="fw-bolder">Precipitation: </span> {data?.current?.precip} cm</li>
            <li className="fs-5 list-group-item"><span className="fw-bolder">Humidity: </span> {data?.current?.precip}%</li>
            <li className="fs-5 list-group-item"><span className="fw-bolder">Cloud Cover: </span> {data?.current?.precip}%</li>
        </ul>
      </div>
    </article>
  );
}

export default WeatherCard;