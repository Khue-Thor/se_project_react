import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../context/ CurrentTemperatureUnitContext";

export function ToggleSwitch() {
  const { CurrentTemperatureUnit, handleToggleSwitchChange } = React.useContext();

  return (
    <div className="toggleswitch__container">
      <label>
        <p className="toggleswitch__f">F</p>
        <p className="toggleswitch__c">C</p>
        <input
        className="toggleswitch__input"
        type="checkbox"
        value={CurrentTemperatureUnit}
        onClick={handleToggleSwitchChange}
        />
        <span className="toggleswitch__slider"></span>
      </label>
    </div>
  )
}
