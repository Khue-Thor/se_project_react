import React from "react";
import "./Profile.css";
import { ClothesSection } from "../ClothesSection/ClothesSection";
import { SideBar } from "../SideBar/SideBar";

export function Profile({ cards, isLoggedIn, handleAddClick, onCardClick, onChangeProfile, onLogOut, handleLikeClick }) {
  
  return (
    <div className="profile">
      <SideBar onChangeProfile={onChangeProfile} onLogOut={onLogOut}/>
      <ClothesSection cards={cards} isLoggedIn={isLoggedIn} handleAddClick={handleAddClick} onCardClick={onCardClick} handleLikeClick={handleLikeClick} />
    </div>
  );
}
