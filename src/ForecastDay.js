import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature} ℃`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature} ℃`;
  }
  function dayName() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecastDay">{dayName()}</div>
      <WeatherIcon code={props.data.condition.icon} size={50} />
      <div className="temperatures">
        <span className="forecastTemperatureMax">{maxTemperature()} </span>
        <span className="forecastTemperatureMin">{minTemperature()}</span>
      </div>
    </div>
  );
}
