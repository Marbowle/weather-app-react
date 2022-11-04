import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />

        <Forecast />

        <footer>
          {" "}
          <p>
            <a
              href="https://github.com/Marbowle/weather-app-react"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by Marta Domagała
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
