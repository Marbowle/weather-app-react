import axios from "axios";
import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
export default function Forecast(props) {
  function handleResponse(response) {}
  let apiKey = "0cbebt1e74ac98c43ofa9f9f906093eb";
  let city = props.cityName;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <WeatherIcon code="broken-clouds-day" size={36} />
          <div className="temperatures">
            <span className="forecastTemperatureMax">19℃ </span>
            <span className="forecastTemperatureMin">1℃</span>
          </div>
        </div>
      </div>
    </div>
  );
}
