import React from "react";
import './AddItemModal.css'
export const AddItemModal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
      <form className="modal__form">
        <h2 className="modal__form-title">New Garment</h2>
        <fieldset className="modal__form-fieldset">
          <label className="modal__form-label">Name</label>
          <input
          className="modal__form-input"
            type="text"
            name="clothName"
            value=""
            placeholder="Name"
            minLength="1"
            maxLength="30"
            required
          />
        </fieldset>

        <fieldset className="modal__form-fieldset">
          <label className="modal__form-label">Image</label>
          <input
          className="modal__form-input"
            type="url"
            name="clothName"
            value=""
            placeholder="Image URL"
            minLength="1"
            maxLength="30"
            required
          />
        </fieldset>
      </form>
      </div>
    </div>
  );
};
