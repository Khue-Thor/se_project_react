import { useState, useEffect } from "react";

import logo from '../../logo.svg';
import './App.css';
import {Header} from "../Hedaer/Header";
import {Main} from "../Main/Main";
import {api} from '../../utils/weatherApi';
import { location, API_KEY } from '../../utils/constants';
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
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
  }
   




  return (
    <div className="App">
       {/* <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        ></CurrentTemperatureUnitContext.Provider> */}
      <Header 
      weatherData= {weatherData}
      />
      <Main 
       weatherData={weatherData}
       cards={clothingitems}
       onCardClick={handleCardClick}
       />
    </div>
  );
}

export default App;
