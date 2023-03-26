import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";
import logoPath from "../../images/wtwr.svg";
import avatarPath from "../../images/avatar.svg";
import { currentDate, date } from "../../utils/constants";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export function Header({ weatherData, handleAddClick }) {
  if (!weatherData) return null;
  const userName = "Terrance Tegegne";

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link to={"/"}>
            <img className="header__logo" src={logoPath} />
          </Link>
          <p className="header__date-location">
            {currentDate} {date}, {weatherData.name}
          </p>
        </div>

        <div className="header__info-container">
          <ToggleSwitch />
          <button className="header__add-clothes" type="button" onClick={handleAddClick}>
            + Add clothes
          </button>

          <p className="header__username">{userName}</p>
          <Link to={"/profile"}>
            <img className="header__avatar" alt="avatar" src={avatarPath} />
          </Link>
        </div>
      </div>
    </header>
  );
}
