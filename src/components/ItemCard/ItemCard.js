import React, { useContext } from "react";
import like from '../../images/like.svg';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./ItemCard.css";

export function ItemCard({ isLoggedIn, card, onCardClick, handleLikeClick}) {

  const currentUser = useContext(CurrentUserContext);

  const isLiked = card.likes?.some((user) => user === currentUser._id);

  const itemLikeButtonClassName = `card__like-btn ${
    isLiked ? "card__like-btn" : "card__liked"
  }`;

  return (
    <div className="card" onClick={() => onCardClick(card)}>
      <div className="card__content">
        <h2 className="card__title">{card.name}</h2>
       {isLoggedIn ? (
         <img src={like} alt="like" className={itemLikeButtonClassName} onClick={(e) => {
          e.stopPropagation();
          handleLikeClick(card._id, !isLiked)
         }}/>
       ) : (
        <img src={like} alt="like" className="card__like-btn_hidden"/>
       )}
      </div>
      <img className="card__image" src={card.imageUrl} alt={card.name} />
    </div>
  );
}
