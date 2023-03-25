import React, { Children } from "react";
import "./ModalWithForm.css";

export function ModalWithForm({ title, name, buttonText, closeModal, onSubmit, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__form-header">
          <h2 className="modal__form-title">{title}</h2>
          <button className="modal__close" type="button" onClick={closeModal} />
        </div>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
         {buttonText === "Next" ? (
           <button type="submit" className="modal__form-save">
           {buttonText}
         </button>
         ): (
          <button type="submit" className="modal__form-save">
          {buttonText}
        </button>
         )}
        </form>
      </div>
    </div>
  );
}
