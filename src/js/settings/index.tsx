import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
// // import "../main/scss/index.scss";
// // import "../../../css/index.css";
import "../main/scss/index.css";
// import Main from "./main";
// import Tabs from '../main/htmlModule/tabs'


initBolt();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="boddy">
      <h1>Color Palette</h1>
      <div className="button_1">Click</div>
    </div>
  </React.StrictMode>
);