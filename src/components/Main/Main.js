import React from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { ItemCard } from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import "./Main.css";

export function Main({ weatherData, cards, onCardClick }) {
  const currentTemperatureUnit = React.useContext(
    CurrentTemperatureUnitContext
  );

  let temperature = weatherData.temperature;
  const weatherType = () => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  };

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes-container">
        <div className="main__info">
          <div className="main__description-container">
            <p className="main__description">
              Today is {temperature}°F and it is {weatherType}
            </p>
            <p className="main__descritipn_slash"> / </p>
            <p className="main__description">You may want to wear:</p>
          </div>
        </div>
        <ul className="main__items">
          <ItemCard />
        </ul>
      </section>
    </main>
  );
}
