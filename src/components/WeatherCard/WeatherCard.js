import React from "react";
import "./WeatherCard.css";
import sunPath from "../../images/sun.svg";
import cloudPath from "../../images/cloudunion.svg";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";

export function WeatherCard({ weatherData }) {
  return (
    <div className="weather__container">
      <div className="weather__temperature-container">
        <p className="weather__temperature">75</p>
        <p className="weather__temperature">F</p>
      </div>

      <div className="weather__images-container">
        <img className="weather__cloud-union" src={cloudPath} alt="clouds" />
        <img className="weather__sunny" src={sunPath} alt="sun" />
      </div>
    </div>
  );
}
