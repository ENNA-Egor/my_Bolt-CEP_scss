import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
import "../../style/css/min/index.min.css";
import Main from "./main";
import Tabs from '../main/htmlModule/tabs';
import {Preloader} from './htmlModule/Preloader'


initBolt();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Preloader/> */}
    <Main />
    <Tabs/>
  </React.StrictMode>
);