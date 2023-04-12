import React, { useState, useEffect } from "react";
import { ModalWithForm } from "../ModalWithForm/ModalWithForm";
import { Link, useHistory } from "react-router-dom";
import './RegisterModal.css'

export function RegisterModal({ form, isOpen, isLoading, onCloseModal, onRegistration }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const history = useHistory();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    onRegistration({ name, avatar, email, password });
    history.push("/profile");
  }

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [isOpen]);

  return (
    <ModalWithForm
      name={form}
      title="Sign up"
      buttonText={isLoading ? "Save..." : "Next"}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      closeModal={onCloseModal}
    >
      <fieldset className="modal__form-fieldset">
        <label className="modal__form-label">Email*</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          minLength="1"
          maxLength="30"
          onChange={handleEmail}
          required
          className="modal__form-input"
        />
        <span className="modal__input-error"></span>
        <label className="modal__form-label">Password</label>
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handlePassword}
          required
          className="modal__form-input"
        />
        <span className="modal__input-error"></span>
        <label className="modal__form-label">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleName}
          minLength="1"
          maxLength="30"
          required
          className="modal__form-input"
        />
        <span className="modal__input-error"></span>
        <label className="modal__form-label">Avatar URL</label>
        <input
          id="avatar-url"
          type="url"
          name="avatar"
          value={avatar}
          placeholder="Avatar URL"
          onChange={handleAvatar}
          className="modal__form-input"
        />
        <span className="modal__input-error"></span>
      </fieldset>
      <p className="modal__auth-text">
        or{" "}
        <Link className="modal__form-link" to="/">
          Log in
        </Link>
      </p>
    </ModalWithForm>
  );
}
