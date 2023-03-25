import React from "react";
import "./ItemModal.css";

export function ItemModal({ card, onCloseModal }) {

  return (
    <div className={`modal__preview`}>
      <div className="modal__preview-container">
        <button className="modal__preview-close" type="button" onClick={onCloseModal} />
        <div className="modal__preview-info">
          <img className="modal__preview-image" src={card?.link} alt={card?.name} />
          <div className="modal__description-container">
            <div>
              <p className="modal__preview-title">{card?.name}</p>
              <p className="modal__preview-description">Weather: {card?.weather}</p>
            </div>
            <button className="modal__delete-button">Delete item</button>
          </div>
        </div>
      </div>
    </div>
  );
}
