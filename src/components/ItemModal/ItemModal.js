import React, { useContext } from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export function ItemModal({ isLoggedIn, card, onCloseModal, onDeleteModal }) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "modal__delete-button" : "modal__delete-button_hidden"
  }`;
  return (
    <div className={`modal__preview`}>
      <div className="modal__preview-container modal__content">
        <button className="modal__preview-close" type="button" onClick={onCloseModal} />
        <div className="modal__preview-info">
          <img className="modal__preview-image" src={card?.imageUrl} alt={card?.name} />
          <div className="modal__description-container">
            <div>
              <p className="modal__preview-title">{card?.name}</p>
              <p className="modal__preview-description">Weather: {card?.weather}</p>
            </div>

            {isLoggedIn ? (
              <button
                className={itemDeleteButtonClassName}
                onClick={onDeleteModal}
                type="button"
              >
                Delete item
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
