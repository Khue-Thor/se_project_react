import React, { useEffect, useState } from "react";
import { ModalWithForm } from "../ModalWithForm/ModalWithForm";
import { useHistory } from "react-router-dom";

export function EditProfileModal({ isOpen, isLoading, currentUser, onEditProfile, onCloseModal }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const history = useHistory();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEditProfile(name, avatar);
    history.push("/profile");
  }
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save"}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      closeModal={onCloseModal}
    >
      <fieldset className="modal__form-fieldset">
        <label className="modal__form-label">Name*</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
          className="modal__form-input"
        />
        <span className="modal__input-error"></span>
        <label className="modal__form-label">Avatar</label>
        <input
          id="avatar-url"
          type="url"
          name="avatar"
          value={avatar}
          placeholder="Avatar url"
          onChange={handleNameChange}
          className="modal__form-input"
        />
        <span className="modal__input-error"></span>
      </fieldset>
    </ModalWithForm>
  );
}
