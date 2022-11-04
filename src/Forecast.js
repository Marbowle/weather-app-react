import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-3">
          <p>Today {""}</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          <p> Max 17℃</p>
        </div>
        <div className="col-3">
          <p>Tuesday {""}</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          <p> Max 4℃</p>
        </div>
        <div className="col-3">
          <p>Wednesday {""}</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          <p>Max 8℃</p>
        </div>
        <div className="col-3">
          <p>Thursday {""}</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          <p> Max 10℃</p>
        </div>
      </div>
    </div>
  );
}
