import React from "react";
import "./ItemCardModal.css";

export function ItemCardModal({ card, onCloseModal }) {
  return (
    <div className={`modal__preview`}>
      <div className="modal__preview-container">
        <button
          className="modal__preview-close"
          type="button"
          onClick={() => onCloseModal(null)}
        ></button>
        <div className="modal__preview-info">
          <img className="modal__preview-image" src={card.list} alt={card?.name}/>
          <p className="modal__preview-title">{card?.name}</p>
          <p className="modal__preview-description">Weather: {card?.weather}</p>
        </div>
      </div>
    </div>
  );
}
