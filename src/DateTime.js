import React from "react";
import "./styles.css";

export default function DateTime() {
  return (
    <div className="DateTime">
      <div className="row">
        <div className="col-8">
          <div className="date">
            <ul className="day">
              <li className="dayToday">Friday</li>
              <li className="time">13:15</li>
              <li className="temperature">Temperature:</li>
            </ul>
          </div>
          <img
            id="icon"
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weathericon"
          />
          <span className="temp" id="temperature">
            {" "}
            18
          </span>
          <span className="units"></span>

          <span className="unitlinks">
            <button id="celsius-link" className="active">
              °C{" "}
            </button>
            |<button id="fahrenheit-link">°F</button>
          </span>
        </div>
        <div className="col-4">
          <ul>
            <li>
              Humidity: <span className="humidity"> 53% </span>
            </li>
            <li>
              Wind: <span className="wind">0 km/h </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
