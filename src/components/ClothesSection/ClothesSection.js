import React from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import "./ClothesSection.css";

export function ClothesSection({
  cards,
  isLoggedIn,
  handleAddClick,
  onCardClick,
  handleLikeClick,
}) {
  return (
    <section className="clothes__section">
      <div className="clothes__section-info">
        <h2 className="clothes__section-title">Your items</h2>
        <button className="clothes__add-button" type="button" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <div>
      <ul className="clothes__section-items">
          {cards.map((card) => {
            return (
              <ItemCard
                isLoggedIn={isLoggedIn}
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={handleLikeClick}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
