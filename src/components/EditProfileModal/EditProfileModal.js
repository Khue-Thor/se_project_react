import React, { useEffect, useState } from "react";
import { ModalWithForm } from "../ModalWithForm/ModalWithForm";
import { useHistory } from "react-router-dom";

export function EditProfileModal({ isOpen, isLoading, currentUser, onEditProfile, onCloseModal }) {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const history = useHistory();

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
      <label>Name</label>
    </ModalWithForm>
  );
}
