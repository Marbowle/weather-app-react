import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="conatainer">
      <div class="row">
        <form>
          <div className="col-6">
            <input type="search" placeholder="Type a city" />
          </div>
          <div className="col-4">
            <input type="submit" value="Search" />
          </div>
          <div className="col-2">
            <input type="submit" value="Current" />
          </div>
        </form>
      </div>
      <h1>Stockholm</h1>
      <div className="col-6 description">
        <ul>
          <li>
            Humidity : {""}
            <span>20</span>
          </li>
          <li>
            Air Pressure : {""}
            <span>1013 hPa</span>
          </li>
          <li>
            Chance of Rain : {""}
            <span>0 %</span>
          </li>
          <li>
            Wind Speed : {""}
            <span>30 km/h</span>
          </li>
        </ul>
      </div>

      <div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="Sunny"
        />
        <h2>23 ℃</h2>
        <h4>Monday: 27th 2022</h4>
      </div>
    </div>
  );
}
