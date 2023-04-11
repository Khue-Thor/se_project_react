import React from "react";
import './SideBar.css';
import avatar from "../../images/avatar.svg";

export function SideBar({onChangeProfile, onLogOut}) {
  const userName = "Terrnace Tegegne";

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img className="sidebar__avatar" src={avatar} alt="avatar"/>
        <p className="sidebar__username">{userName}</p>
      </div>
      <div className="sidebar__buttons-container">
        <button className="sidebar__edit-profile" onClick={onChangeProfile}>Change profile data</button>
        <button className="sidebar__log-out" type="button" onClick={onLogOut}>Log out</button>
      </div>
    </div>
  )
}