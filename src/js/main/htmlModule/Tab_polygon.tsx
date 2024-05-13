import React, { useContext } from "react";
import { os, path, fs } from '../../lib/cep/node';
import {
   //    csi,
   //    evalES,
   //    evalFile,
   //    openLinkInBrowser,
   //    subscribeBackgroundColor,
   evalTS,
} from "../../lib/utils/bolt";
import { render } from "react-dom";

import { StartContext } from "../Context";
// import { allowedImportFiles } from "../../lib/utils/ppro";

function Tab_polygon() {

   const { customData = {}, changeInput, } = useContext(StartContext);
   const patFfx = path.join(__dirname, '/public/ffx/');

   function createPolygon() {
      evalTS("createPolygonTS", "Polygon", customData, patFfx).then((res) => {
      });
   };

   function butCap() {
      evalTS("butCapTS", "TrPolygon", 1, "TrSC_Polygon").then((res) => {
      });
   };

   function roundCap() {
      evalTS("roundCapTS", "TrPolygon", 2, "TrSC_Polygon").then((res) => {
      });
   };

   function plusEl() {
      evalTS("plusElTS", "TrSC_Polygon-", "TrPolygon_", customData.colors).then((res) => {
      });
   };

   function minusEl() {
      evalTS("minusElTS", "TrSC_Polygon-", "TrPolygon_").then((res) => {
      });
   };

   const npoint = customData.num_points;
   const changeInputOn = (e: any) => {
      if (e.target.value < 3) {
         e.target.value = 3
         alert('The value cannot be less than 3')
      }
      if (e.target.value > 15) {
         alert('The value cannot be greater than 15')
         e.target.value = 15
      }
      changeInput([e.target.name], e.target.value);
   };


   return (
      <div className="tab-polygon tab-b  hide">
         <fieldset className="field">
            <legend>Polygon</legend>
            <div className="polygon-blok point-blok">
               <p className="n_points">Number Points</p>
               <input onChange={changeInputOn} className="n_points  inp" name="num_points" value={npoint} />
            </div>
            <div className="polygon-blok">
               <div className="button buttonP" onClick={createPolygon}>Create</div>
            </div>
            <p>Cap</p>
            <div className="linecap_blok" >
               <div className="button button_cap  but" onClick={butCap}></div>
               <div className="button button_cap round" onClick={roundCap}></div>
            </div>
            <p>Add/End</p>
            <div className="add_end_blok" >
               <div className="button button_plus" onClick={plusEl}></div>
               <div className="button button_minus" onClick={minusEl}></div>
            </div>
         </fieldset>
      </div>
   );
}




export default Tab_polygon;