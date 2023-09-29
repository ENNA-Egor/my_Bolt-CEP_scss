import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
// import "../main/scss/index.scss"
import "../main/style/css/min/index.min.css";
// import "../main/scss/index.css";
import Main from "./main";
// import Tabs from '../main/htmlModule/tabs'


initBolt();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);