import "./Main.css";
import React from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";

export function Main({ weatherData, cards, onCardClick }) {


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
    <WeatherCard/>
  )

 
}