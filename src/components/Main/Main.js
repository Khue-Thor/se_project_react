import React from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { ItemCard } from "../ItemCard/ItemCard";
import "./Main.css";

export function Main({ weatherData, cards, onCardClick }) {
  
  const temperature = weatherData.main?.temp;
  const getWeatherType = () => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();
  const filteredCards = cards.filter((card) => card.weather === weatherType);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes-container">
        <div className="main__info">
          <div className="main__description-container">
            <p className="main__description">
              Today is {Math.round(temperature)}°F and it is {getWeatherType()}{" "}
              / You may want to wear:
            </p>
          </div>
        </div>
        <ul className="main__items">
          {filteredCards.map((filteredCard) => (
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
