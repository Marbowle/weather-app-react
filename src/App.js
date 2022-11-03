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
    </div>
  );
}

export default App;
