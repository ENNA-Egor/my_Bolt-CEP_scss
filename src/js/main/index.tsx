import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
// import "../main/scss/index.scss";
import "../main/style/css/min/index.min.css";
import Main from "./main";
import Tabs from '../main/htmlModule/tabs'


initBolt();
// Start();

//   function Start(){
//     alert('Start');
//     let currentPal = document.getElementsByClassName('pai_1');
//     currentPal.style.backgroundColor = 'red';

//   };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
    <Tabs/>
  </React.StrictMode>
);