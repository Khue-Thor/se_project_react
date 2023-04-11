import React, { useContext } from "react";
import like from '../../images/like.svg';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./ItemCard.css";

export function ItemCard({ card, onCardClick }) {

  const currentUser = useContext(CurrentUserContext);

  const isLiked = card.likes?.some((user) => user === currentUser._id);

  const itemLikeButtonClassName = `card__heart-icon ${
    isLiked ? "card__heart-icon" : "card__like-btn"
  }`;

  return (
    <div className="card" onClick={() => onCardClick(card)}>
      <div className="card__content">
        <h2 className="card__title">{card.name}</h2>
        
      </div>
      <img className="card__image" src={card.imageUrl} alt={card.name} />
    </div>
  );
}
