import { useState, useEffect } from "react";
import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import { Header } from "../Hedaer/Header";
import { Main } from "../Main/Main";
import { api } from "../../utils/weatherApi";
import { location, API_KEY } from "../../utils/constants";
import {defaultClothingItems } from "../../utils/clothingItems";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingitems, setClothingItems] = useState([]);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePreviewOpen(true);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    api
      .getWeatherData(location, API_KEY)
      .then((weatherInfo) => {
        setWeatherData(weatherInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    setClothingItems(defaultClothingItems)
  })

  return (
    <div className="App">
      <div className="App__content">
        <Header weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          cards={defaultClothingItems}
          onCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}

export default App;
