import React from "react";
import './Footer.css';
import { date } from "../../utils/constants";
export function Footer() {
  return(
    <footer className="footer">
     <p className="footer__description">Developed by Khuephamy Phialouang</p>
     <p className="footer__description">{date}</p>
    </footer>
  )
}