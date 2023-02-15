import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>omalloc - Open Source Programming Teams.</p>
        <a
          className="App-link"
          href="https://github.com/omalloc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Teams
        </a>
      </header>
    </div>
  );
}

export default App;
