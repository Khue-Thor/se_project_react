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
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { weatherApi } from "../../utils/weatherApi";
import { api } from "../../utils/api";
import { location, API_KEY } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/clothingItems";
import { CurrentTemperatureUnitContext } from "../../context/ CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingitems, setClothingItems] = useState(defaultClothingItems);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePreviewOpen(true);
  };

  const handleAddClick = () => setIsAddItemModalOpen(true);

  const closeModal = () => {
    setIsImagePreviewOpen(false);
    setIsAddItemModalOpen(false);
    setDeleteModalOpen(false);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
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
    weatherApi
      .getWeatherData(location, API_KEY)
      .then((setweatherInfo) => {
        setWeatherData(setweatherInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((clothing) => {
        setClothingItems(clothing);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleAddItemSubmit(name, imageUrl, weather) {
    setIsLoading(true);
    api
      .addItem({ name, imageUrl, weather })
      .then((item) => {
        setClothingItems([item, ...clothingitems]);
        closeModal();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  function handleCardDeleteSubmit() {
    api
      .deleteItem(selectedCard.id)
      .then(() => {
        setClothingItems([...clothingitems.filter((item) => item.id !== selectedCard.id)]);
        setSelectedCard({});
        closeModal();
      })
      .catch((err) => console.error(err));
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
              <Main weatherData={weatherData} cards={clothingitems} onCardClick={handleCardClick} />
            </Route>
            <Route path={"/profile"}>
              <Profile
                cards={clothingitems}
                handleAddClick={handleAddClick}
                onCardClick={handleCardClick}
              />
            </Route>
          </Switch>

          <Footer />
        </div>
        {isAddItemModalOpen && (
          <AddItemModal
            name="create"
            isLoading={isLoading}
            isOpen={isAddItemModalOpen}
            onCloseModal={closeModal}
            onAddItem={handleAddItemSubmit}
          />
        )}
        {isImagePreviewOpen && (
          <ItemModal
            card={selectedCard}
            onCloseModal={closeModal}
            onDeleteModal={openDeleteModal}
          />
        )}
        {deleteModalOpen && (
          <DeleteConfirmationModal
            onCloseModal={closeModal}
            onOpen={openDeleteModal}
            handleDelete={handleCardDeleteSubmit}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
