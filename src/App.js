import React from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />

        <footer>
          {" "}
          <p>
            <a
              href="https://github.com/Marbowle/weather-app-react"
              target="_blank"
              rel="noreferrer"
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
