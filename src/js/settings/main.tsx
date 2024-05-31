import { useEffect, useState, useContext } from "react";
import { os, path } from "../lib/cep/node";
import {
  subscribeBackgroundColor,
} from "../lib/utils/bolt";
import PalettList from './Palette/palettList'
import { PaletteContext } from './PalettContext';
import {readData} from '../functionModule/function'

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");

  const pathWriteEndReadContext: string =
      '/public/settingsData/allDataContent.json';
  
  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
      let dataContext = readData(pathWriteEndReadContext);
      const dataStartContext:any = JSON.parse(dataContext);
      startColors(dataStartContext.customPalett.Custom);
    }
  }, []);
  const {customPalett, writeColorContext, startColors}=  useContext(PaletteContext);

  // useEffect(() => {
  //   setTimeout(writeColorContext, 10 , customPalett);
  //   }, [customPalett]);

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
            <button className="button_bt btn2  stic" onClick={plusPal}>+</button>
            <input className="setName  stic" type="text" placeholder="Enter a group name"/>

        </fieldset>
    </div>
     <PalettList palets={COLORS_PALLETE}/>
  </div>
  );
};

export default Main;