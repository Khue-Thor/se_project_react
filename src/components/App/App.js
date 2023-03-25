import { useState, useEffect } from "react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../../logo.svg";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Profile } from "../Profile/Profile";
import { AddItemModal } from "../AddItemModal/AddItemModal";
import { ItemModal } from "../ItemModal/ItemModal";
import { api } from "../../utils/weatherApi";
import { location, API_KEY } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/clothingItems";
import { CurrentTemperatureUnitContext } from "../../context/ CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingitems, setClothingItems] = useState([]);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePreviewOpen(true);
  };

  const handleAddClick = () => setIsAddItemModalOpen(true);

  const closeModal = () => {
    setIsImagePreviewOpen(false);
    setIsAddItemModalOpen(false);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    api
      .getWeatherData(location, API_KEY)
      .then((setweatherInfo) => {
        setWeatherData(setweatherInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleAddItemSubmit() {
    closeModal();
  }

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="App__content">
          <Header weatherData={weatherData} handleAddClick={handleAddClick} />
          <Switch>
            <Route exact path={"/"}>
              <Main
                weatherData={weatherData}
                cards={defaultClothingItems}
                onCardClick={handleCardClick}
              />
            </Route>
            <Route path={"/profile"}>
              <Profile
                clothes={defaultClothingItems}
                handleAddClick={handleAddClick}
                onCardClick={handleCardClick}
              />
            </Route>
          </Switch>

          <Footer />
        </div>
        {isAddItemModalOpen && (
          <AddItemModal name="create" onCloseModal={closeModal} onAddItem={handleAddItemSubmit} />
        )}
        {isImagePreviewOpen && <ItemModal card={selectedCard} onCloseModal={closeModal} />}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
