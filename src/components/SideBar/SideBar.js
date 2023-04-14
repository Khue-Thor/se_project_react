import React from "react";
import './SideBar.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from 'react';

export function SideBar({onChangeProfile, onLogOut}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img className="sidebar__avatar" src={currentUser.avatar} alt="avatar"/>
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__buttons-container">
        <button className="sidebar__edit-profile" onClick={onChangeProfile}>Change profile data</button>
        <button className="sidebar__log-out" type="button" onClick={onLogOut}>Log out</button>
      </div>
    </div>
  )
}