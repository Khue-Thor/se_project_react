import React from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { ItemCard } from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import "./Main.css";


export function Main({ weatherData, cards, onCardClick }) {

  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  // let temperature = weatherData.main?.temp;
  // const weatherType = () => {
  //   if (temperature >= 86) {
  //     return "hot";
  //   } else if (temperature >= 66 && temperature <= 85) {
  //     return "warm";
  //   } else if (temperature <= 65) {
  //     return "cold";
  //   }
  // };

  return (
    <main className="main">
      <WeatherCard />
      <section className="main__clothes-container">
        <div className="main__description-container">
          <p className="main__description">
            Today is 75F/ You may want to wear:
          </p>
        </div>
        <ul className="main__items">
          <ItemCard/>
        </ul>
      </section>
    </main>
  );
}
