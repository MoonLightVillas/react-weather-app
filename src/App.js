import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
      <Weather defaultCity="New York" />
      <footer>
          This project was coded by{" "}
          <a
            href="https://marielacampos.slack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariela Campos
          </a>{" "}
          and is{" "}
          <a
          href="https://github.com/MoonLightVillas/react-weather-app"
          target="_blank"
          rel="noopener noreferrer">
            hosted on Netlify
          </a>
      </footer>
    </div>
  </div>
  );
  }  