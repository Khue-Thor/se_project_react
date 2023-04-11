import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoPath from "../../images/wtwr.svg";
import avatarPath from "../../images/avatar.svg";
import { currentDate } from "../../utils/constants";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./Header.css";

export function Header({ isLoggedIn, weatherData, handleAddClick, onLoginClick, onRegisterClick }) {
  
  const currentUser = useContext(CurrentUserContext);
  if (!weatherData) return null;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link to={"/"}>
            <img className="header__logo" src={logoPath} />
          </Link>
          <p className="header__date-location">
            {currentDate}, {weatherData.name}
          </p>
        </div>

        <div className="header__info-container">
          <ToggleSwitch />

          {isLoggedIn ? (
            <div></div>
          ) : (
            <>
              <button className="header__register" type="button" onClick={onRegisterClick}>
                Sign Up
              </button>
              <button className="header__login" type="button" onClick={onLoginClick}>
                Log in
              </button>
            </>
          )}

          {isLoggedIn ? (
            <di className="header__user-info">
              <button className="header__add-clothes" type="button" onClick={handleAddClick}>
                + Add clothes
              </button>

              <p className="header__username">{currentUser.name}</p>
              <Link to={"/profile"}>
                <img className="header__avatar" alt="avatar" src={currentUser.avatar} />
              </Link>
            </di>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </header>
  );
}
