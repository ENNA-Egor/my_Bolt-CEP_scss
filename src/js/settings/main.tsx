import { HtmlHTMLAttributes, useEffect, useState } from "react";
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
   {/* <p>Color Palette</p> */}
   {/* <div className="buttons">
   <div className="button">Click</div>
   </div> */}
   {/* <h3>Color palette</h3> */}
     {/* <div>
        <button class="butt btn">Add</button>
    </div> */}
    <div>
        <fieldset className="field_1">
            <legend className="legend">Add Preset</legend>
            <button className="button_bt btn2">+</button>
            <input className="setName" type="text" placeholder="Enter a group name"/>
             {/* <button class="button btn3">- Data</button>
            <button class="button btn4">^ Data</button> */}
        </fieldset>
    </div>
 </div>
  );
};

export default Main;