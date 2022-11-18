import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <div className="row mt-4">
        <div className="col-6">
          <ul>
            <li>Humidity : {props.data.humidity} %</li>
            <li>Air Pressure : {props.data.pressure} hPa</li>
            <li>Wind Speed: {Math.round(props.data.wind * 3.6)} km/h</li>
          </ul>
        </div>
      </div>

      <div className="weather-description">
        <div>
          <WeatherIcon code={props.data.icon} size={90} />
        </div>
        <div className="weather-information">
          <div className="description">{props.data.description}</div>
          <h2 className="temp">{Math.round(props.data.temperature)}℃</h2>
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
        </div>
      </div>
    </div>
  );
}
