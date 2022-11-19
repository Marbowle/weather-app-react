import React from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="Stockholm" />
      <footer>
        {" "}
        <p>
          This project was coded by{" "}
          <a
            href="https://martadomagala.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Marta Domagała
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/Marbowle/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>{" "}
          and{" "}
          <a
            href="https://web-weather-react-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
