import React from "react";
import ReactDOM from "react-dom/client";
import { initBolt } from "../lib/utils/bolt";
import "../../style/css/min/index.min.css";
import Main from "./main";
import Tabs from '../main/htmlModule/tabs';
import { Context } from './Context';
// import {Preloader} from '../main/htmlModule/TabColor/Preloader'


initBolt();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Preloader/> */}
        <Main />
      <Context>
        <Tabs/>
      </Context>
  </React.StrictMode>
);