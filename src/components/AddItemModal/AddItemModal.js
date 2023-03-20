import React, { useEffect, useState } from "react";
import { ModalWithForm } from "../ModalWithForm/ModalWithForm";
export const AddItemModal = ({
  name,
  isOpen,
  onAddItem,
  onCloseModal,
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
    <ModalWithForm
      title="New Garment"
      closeModal={onCloseModal}
      onSubmit={handleSubmit}
    >
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
        <label className="modal__form-label">Select the weather type:</label>
        <div className="modal__form-input_type_radio">
          <div className="modal__form-choice">
            <input type="radio" id="choiceHot" name="weatherType" value="hot" />
            <label className="modal__label_radio" htmlFor="choiceHot">
              Hot
            </label>
          </div>

          <div className="modal__form-choice">
            <input type="radio" id="choiceHot" name="weatherType" value="hot" />
            <label className="modal__label_radio" htmlFor="choiceHot">
              Warm
            </label>
          </div>

          <div className="modal__form-choice">
            <input type="radio" id="choiceHot" name="weatherType" value="hot" />
            <label className="modal__label_radio" htmlFor="choiceHot">
              Cold
            </label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};
