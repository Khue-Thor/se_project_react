import React from "react";
import "./ItemCard.css";

export function ItemCard({card, onCardClick}) {
  return (
    <div className="card" onClick={() => onCardClick(card)}>
      <div className="card__content">
        <h2 className="card__title">{card}Item Name</h2>
      </div>
      <img className="card__image" src={card.linkl} alt={card.name}/>
    </div>
  )
}