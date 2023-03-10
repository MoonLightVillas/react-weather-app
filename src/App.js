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
            href="mailto:marielacampos@gmail.com"
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
            open-sourced on GitHub 
          </a> {""}
            and {""}
          <a
          href="https://calm-sunshine-446fa3.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
      </footer>
    </div>
  </div>
  );
  }  