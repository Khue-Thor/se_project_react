import { useState, useEffect } from "react";

import logo from '../../logo.svg';
import './App.css';
import {Header} from "../Hedaer/Header";
import {Main} from "../Main/Main";
import {api} from '../../utils/weatherApi';
import { location, API_KEY } from '../../utils/constants';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
