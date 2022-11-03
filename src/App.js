import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer className="App-forecast">
        <Forecast />
      </footer>
      <p><a href="https://github.com/Marbowle/weather-app-react">Open-source code</a> by Marta Domagała</p>
      
    </div>
  );
}

export default App;
