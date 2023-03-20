import { useState, useEffect } from "react";
import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import { Header } from "../Hedaer/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { AddItemModal } from "../AddItemModal/AddItemModal";
import { api } from "../../utils/weatherApi";
import { location, API_KEY } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/clothingItems";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingitems, setClothingItems] = useState([]);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePreviewOpen(true);
  };

  const handleAddClick = () => setIsAddItemModalOpen(true)

  const closeModal = () => {
    // setIsImagePreviewOpen(false);
    setIsAddItemModalOpen(false);
  };

  useEffect(() => {
    api
      .getWeatherData(location, API_KEY)
      .then((weatherInfo) => {
        setWeatherData(weatherInfo);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="App">
      <div className="App__content">
        <Header 
        weatherData={weatherData}
        handleAddClick={handleAddClick} />
        <Main
          weatherData={weatherData}
          cards={defaultClothingItems}
          onCardClick={handleCardClick}
        />
        <Footer/>
      </div>
      {isAddItemModalOpen && (
        <AddItemModal
          name="create"
          isOpen={isAddItemModalOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
