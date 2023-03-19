import React from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { ItemCard } from "../ItemCard/ItemCard";
import clothingitems from "../../utils/clothingItems";
import "./Main.css";

export function Main({ weatherData, cards, onCardClick }) {
  let temperature = weatherData.main?.temp;
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
              Today is {Math.round(temperature)}°F and it is {weatherType()} /
              You may want to wear:
            </p>
          </div>
        </div>
        <ul className="main__items">
          {cards
            .filter((card) => card.weather === weatherType())
            .map((filteredCard) => (
              <ItemCard
                key={filteredCard.id}
                card={filteredCard}
                onCardClick={onCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}
