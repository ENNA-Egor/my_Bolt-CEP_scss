import { useEffect, useState, useContext } from "react";
import { os, path } from "../lib/cep/node";
import {
  subscribeBackgroundColor,
} from "../lib/utils/bolt";
import PalettList from './Palette/palettList'
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
    }

    
    return (
      <div className="boddy2">
    <p>COLOR PALETTE</p> 
    <div>
        <fieldset className="field_1">
            <legend className="legend">Add Preset</legend>
            <button className="button_bt btn2" onClick={plusPal}>+</button>
            <input className="setName" type="text" placeholder="Enter a group name"/>

        </fieldset>
    </div>
     <PalettList palets={COLORS_PALLETE}/>
  </div>
  );
};

export default Main;