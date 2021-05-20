import React from "react";
import "./styles.css";

export default function WeatherDescription() {
  return (
    <h1>
      <span className="weather" id="description">
        Mostly sunny in
      </span>
      <span id="currentCity"> Athens, Greece.</span>
    </h1>
  );
}
