import React from "react";
import "./WeatherCard.css";
import sunPath from "../../images/sun.svg";
import cloudPath from "../../images/cloudunion.svg";

export function WeatherCard({ weatherData }) {
  const temperature = weatherData.main?.temp;
  return (
    <div className="weather__container">
      <div className="weather__temperature-container">
        <p className="weather__temperature">{Math.round(temperature)}°F</p>
      </div>

      <div className="weather__images-container">
        <img className="weather__sunny" src={sunPath} alt="sun" />
        <img className="weather__cloud-union" src={cloudPath} alt="clouds" />
      </div>
    </div>
  );
}
