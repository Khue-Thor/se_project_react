import "./Header.css";

import React from "react";
import logoPath from "../../images/wtwr.svg";
import avatarPath from "../../images/avatar.svg";

export function Header({}) {

  const userName = "Terrance Tegegne";

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img className="header__logo" src={logoPath} />
          <p className="header__date-location">March 20, Saint Paul</p>
        </div>

        <div className="header__info-container">
          <button className="header__add-clothes">
            + Add clothes
          </button>

          <p className="header__username">{userName}</p>
          <img className="header__avatar" alt="avatar" src={avatarPath}/>
        </div>
      </div>
    </header>
  );
}
