import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function search() {
    const apiKey = "0cbebt1e74ac98c43ofa9f9f906093eb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key={apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" />
            </div>
            <div className="col-2">
              <input type="submit" value="Current" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
