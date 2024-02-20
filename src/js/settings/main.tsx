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

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  
  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);



  return (
   <div className="boddy">
   <p>Color Palette</p>
   <div className="buttons">
   <div className="button">Click</div>
   </div>
 </div>
  );
};

export default Main;