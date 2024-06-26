import React, {  useContext, useEffect } from "react";

import {
   csi,
   evalTS,
} from "../../../lib/utils/bolt";
import { StartContext } from '../../Context';

import Colors from './Colors';
import { Preloader } from './Preloader'
import { hexToRgb } from '../../../functionModule/function';
import { rgbToHexOne } from '../../../functionModule/function';


function Tab_color() {

   const { customData = {}, customColorSettings, handleCheckboxChange } = useContext(StartContext);

   const replaceColor = (arrIndex) => {
      evalTS("replaceColorTS", { picker_check_value: customData.checkColorpicer, picker_path: __dirname, colorStart: customData.oldColor, arrIndex: arrIndex }).then((res) => {
         let colVal = hexToRgb(res);
         let resNew = rgbToHexOne(colVal);
         let newArr = customData.colors;
         newArr.splice(arrIndex, 1, resNew);
         customColorSettings(resNew, newArr);
      });
   };

   const plusPal = () => {
      evalTS("plusPalTS", { picker_check_value: customData.checkColorpicer, picker_path: __dirname, colorStart: customData.oldColor }).then((res) => {
         let colVal = hexToRgb(res);
         let resNew = rgbToHexOne(colVal);
         let newArr = customData.colors;
         newArr.push(resNew);
         customColorSettings(resNew, newArr);
      });
   };

   var btnApp = document.getElementsByClassName('bt3');

   const handleColorpickerChangeOn = (e: any) => {
      handleCheckboxChange([e.target.name], e.target.checked);
      if (customData.autoFill === false) {
         btnApp[0].classList.add('disabled-div');
      } else { btnApp[0].classList.remove('disabled-div'); }
   }



   const replaceAndMinusColor = (e: any) => {
      let arrIndex = +[e.target.id];
      if (e.ctrlKey) {
         let newArr = customData.colors;
         let oldcolor = customData.oldColor;
         newArr.splice(arrIndex, 1);
         customColorSettings(oldcolor, newArr);
      } else {
         replaceColor(arrIndex);
      }
   }

   const colorSet = () => {
      evalTS("colorSetTS", customData.colors).then((res) => {
      });
   };

   

   // useEffect(() => {
   //    let tabH = document.getElementsByClassName('preload');
   //    setTimeout(()=>{tabH[0].classList.add('hide')}, 1000);
   // }, []);


   useEffect(() => {
      if (customData.autoFill === true) {
         evalTS("colorSetTS", customData.colors).then((res) => {
         });
      }
   }, [customData]);



   function openPanel(): void {
      csi.requestOpenExtension('com.Bolt-CEP_Test.cep.colorsPalett', 0);
   }


   return (
      <div className="bloc_palets tab-color tab-b visible">
         <fieldset className="field">
            <legend>Color</legend>
            <div className="colorP">
               <p>ColorPicker_AE</p>
               <input type="checkbox" checked={customData.checkColorpicer} onChange={handleColorpickerChangeOn} className="n_points  check" name="checkColorpicer" />
            </div>
            {/* { */}
                {/* customData.colors.length ? ( */}
                  <div className="blok_palet">
                     <Colors colors={customData.colors} replaceAndMinusColor={replaceAndMinusColor} />
                  </div>
               {/* // ) :  */}
               {/* <Preloader/> */}
            {/*  } */}
            <div className="colorP">
               <p>AutoFill</p>
               <input type="checkbox" checked={customData.autoFill} onChange={handleColorpickerChangeOn} className="n_points  check" name="autoFill" />
            </div>
            <div className="buttons">
               <div onClick={plusPal} className="button bt1 " id="btnPlus"></div>
               <div onClick={colorSet} className="button bt3" id="btnApp">App</div>
               <div /*onClick={}*/ className="button bt4" id="btn_reset">Res</div>
            </div>
            <div className="buttons">
               <div className="button bt5" >Save</div>
               <div onClick={openPanel} className="button bt6">ColorPal</div>
            </div>
         </fieldset>
      </div>
   );


}





export default Tab_color;