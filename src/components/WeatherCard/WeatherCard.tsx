import React from "react";

const WeatherCard: React.FC<{data: any}> = ({ data }) => {
  return (
    <article className="card col-lg-3 col-md-2 col-12 shadow p-4 m-4 bg-body rounded">
      {data && data?.current && data.current?.weather_icons?.length && (
        data.current.weather_icons.map((icon: string | undefined) => <img className="rounded shadow-lg" src={icon} key={icon} alt={data?.current?.weather_descriptions[0]} />)
      )}
      <h3 className="card-title text-center my-4">
        {data?.location?.name}<br/><p style={{fontWeight: 400, fontSize: "1.25rem"}}>{data?.current?.temperature} &deg;Celsius</p>
      </h3>
      
      <div className="card-body text-center">
        {data?.current?.weather_descriptions?.map((desc: string) => <h5>{desc}</h5>)}
        <ul className="list-group">
          <li className="list-group-item text-bold">Wind: {data?.current?.wind_speed} mph {data?.current?.wind_dir}</li>
        </ul>
      </div>
    </article>
  );
}

export default WeatherCard;