import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <div className="row mt-4">
        <div className="col-6">
          <ul>
            <li>Humidity : {props.data.humidity} %</li>
            <li>Air Pressure : {props.data.pressure} hPa</li>
            <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <WeatherIcon code={props.data.icon} size={70} />
        </div>
        <h2>{Math.round(props.data.temperature)}℃</h2>
        <h4>
          <FormattedDate date={props.data.date} />
        </h4>
      </div>
    </div>
  );
}
