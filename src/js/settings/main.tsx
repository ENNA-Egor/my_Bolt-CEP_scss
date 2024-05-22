import { HtmlHTMLAttributes, useEffect, useState, useContext } from "react";
import { os, path } from "../lib/cep/node";
import {
  csi,
  evalES,
  evalFile,
  openLinkInBrowser,
  subscribeBackgroundColor,
  evalTS,
} from "../lib/utils/bolt";
import Paletts from './Palette/paletts'
import { PaletteContext } from './PalettContext';

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  
  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);

    const {customPalett}=  useContext(PaletteContext);
    const COLORS_PALLETE = customPalett;

    const plusPal=()=> {
      alert ('Ok');
      // alert (customPalett.Default);
      console.log (customPalett.Default);
      let n =Object.keys(customPalett)[0];
      console.log (n);
      // console.log (customPalett.`$n`);
      console.log (Object.keys(customPalett)[0]);
      console.log (Object.keys(customPalett)[1]);
    }

    function renderPalett(COLORS_PALLETE: any) {
      return Object.keys(COLORS_PALLETE).map((key) => {
        const value = COLORS_PALLETE[key];
        if (typeof value === "object") {
          return (
            <div key={key}>
              <h1>{key}</h1>
              <ul>{renderPalett(value)}</ul>
            </div>
          );
        } else {
          return <li key={key} className= {'palette'} style ={{backgroundColor:value}}>{value}</li>;
        }
      });
    }
    
    const PalettList = () => {
      return <ul>{renderPalett(COLORS_PALLETE)}</ul>;
    };
    
    return (
      <div className="boddy">
    <p>COLOR PALETTE</p> 
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
            <button className="button_bt btn2" onClick={plusPal}>+</button>
            <input className="setName" type="text" placeholder="Enter a group name"/>
             {/* <button class="button btn3">- Data</button>
            <button class="button btn4">^ Data</button> */}
        </fieldset>
    </div>
     {/* <div>{getKey_1_Context(COLORS_PALLETE)}</div> 
     {
  Object.keys(customPalett).map(keys =>( */}
    
     <PalettList/>
{/* //         ))
//       }  */}
{/* //     <Paletts paletts={'Proba'}/>  */}
//  </div>
  );
};

export default Main;