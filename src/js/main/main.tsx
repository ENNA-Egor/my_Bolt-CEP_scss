import { useEffect, useState } from "react";
import { os, path } from "../lib/cep/node";
import {
  csi,
  evalES,
  evalFile,
  openLinkInBrowser,
  subscribeBackgroundColor,
  evalTS,
} from "../lib/utils/bolt";

// import bolt from "../assets/bolt-cep.svg";
import circle from "../assets/png/Circle-01.png";
import polygon from "../assets/png/Polygon-01.png";
import color from "../assets/png/Color.png";
import setting from "../assets/png/Help.png";


import "../main/scss/main.css";

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  
  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);



  return (
       <div className="app" >
         <div className="tabs-head">
            <div className="tab-h tab-c">
            </div>
          </div>
         <div className="tabs-head">
            <div className="tab-h tab-p">
            </div>
          </div>
         <div className="tabs-head active">
            <div className="tab-h tab-col">
            </div>
          </div>
         <div className="tabs-head">
            <div className="tab-h   tab-s">
            </div>
      </div>
     </div> 
  );
};

export default Main;
