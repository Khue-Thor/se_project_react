import React, { useEffect, useState } from "react";
import { ModalWithForm } from "../ModalWithForm/ModalWithForm";
import { Link, useHistory } from "react-router-dom";
import "./LoginModal.css";

export function LoginModal({ name, isOpen, isLoading, onCloseModal, onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    onLogin(email, password);
    history.push("/profile");
  }

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title={"Log in"}
      name={name}
      buttonText={isLoading ? "Logging in..." : "Login"}
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
      </fieldset>
      <p className="modal__auth-text-login">
        or{" "}
        <Link className="modal__form-link" to="/">
          Register
        </Link>
      </p>
    </ModalWithForm>
  );
}
