import React from "react";
import "./Profile.css";
import { ClothesSection } from "../ClothesSection/ClothesSection";
import { SideBar } from "../SideBar/SideBar";

export function Profile({ clothes, handleAddClick, onCardClick }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection cards={clothes} handleAddClick={handleAddClick} onCardClick={onCardClick} />
    </div>
  );
}
