import React, { useEffect, useState } from "react";
import "./AddItemModal.css";
export const AddItemModal = ({
  name,
  isOpen,
  onAddItem,
  closeModal,
  onSubmit,
}) => {
  const [itemName, setItemName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setItemName("");
    setImageUrl("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(name, imageUrl);
  }
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__form-header">
          <h2 className="modal__form-title">New Garment</h2>
          <button
            className="modal__close"
            type="button"
            onClick={closeModal}
          ></button>
        </div>
        <form className="modal__form" onSubmit={handleSubmit}>
          <fieldset className="modal__form-fieldset">
            <label className="modal__form-label">Name</label>
            <input
              className="modal__form-input"
              type="text"
              name="clothName"
              // value={itemName}
              placeholder="Name"
              minLength="1"
              maxLength="30"
              required
            />
            <span className="modal__input-error"></span>
          </fieldset>

          <fieldset className="modal__form-fieldset">
            <label className="modal__form-label">Image</label>
            <input
              className="modal__form-input"
              type="url"
              name="clothName"
              // value={imageUrl}
              placeholder="Image URL"
              minLength="1"
              maxLength="30"
              required
            />
            <span className="modal__input-error"></span>
          </fieldset>

          <fieldset className="modal__form-fieldset">
            <label className="modal__form-label">
              Select the weather type:
            </label>
            <div className="modal__form-input_type_radio">
              <div className="modal__form-choice">
                <input
                  type="radio"
                  id="choiceHot"
                  name="weatherType"
                  value="hot"
                />
                <label className="modal__label_radio" htmlFor="choiceHot">
                  Hot
                </label>
              </div>

              <div className="modal__form-choice">
                <input
                  type="radio"
                  id="choiceHot"
                  name="weatherType"
                  value="hot"
                />
                <label className="modal__label_radio" htmlFor="choiceHot">
                  Warm
                </label>
              </div>

              <div className="modal__form-choice">
                <input
                  type="radio"
                  id="choiceHot"
                  name="weatherType"
                  value="hot"
                />
                <label className="modal__label_radio" htmlFor="choiceHot">
                  Cold
                </label>
              </div>
            </div>
          </fieldset>
          <button type="Submit" className="modal__form-save">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
};
