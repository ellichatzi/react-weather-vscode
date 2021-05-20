import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SearchCity from "./SearchCity";
import Button from "./Button";
import WeatherDescription from "./WeatherDescription";
import DateTime from "./DateTime";
import Forecast from "./Forecast";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SearchCity />
    <Button />
    <WeatherDescription />
    <DateTime />
    <Forecast />
  </StrictMode>,
  rootElement
);
