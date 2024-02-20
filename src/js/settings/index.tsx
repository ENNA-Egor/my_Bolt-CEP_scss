import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
import "../../style/css/min/index.min.css";
import Main from "./main";


initBolt();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);