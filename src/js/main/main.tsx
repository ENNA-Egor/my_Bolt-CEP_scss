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

// import "../main/scss/main.scss";
import "../main/scss/main.css";

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  
  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);

  return (
       <div className="app" style={{ backgroundColor: bgColor }}> 
        {/* <div className="tabs"> */}
         <div className="tabs-head">
            <div className="tab-h">1</div>
          </div>
         <div className="tabs-head">
            <div className="tab-h">2</div>
          </div>
         <div className="tabs-head">
            <div className="tab-h">3</div>
          </div>
         <div className="tabs-head">
            <div className="tab-h">4</div>
          </div>
        {/* </div> */}
     </div> 
  );
};

export default Main;
