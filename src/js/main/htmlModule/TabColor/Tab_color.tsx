import React, {useContext}  from "react";
import {os, path, fs} from "../../../lib/cep/node"
import {
   csi,
   evalES,
   evalFile,
   openLinkInBrowser,
   subscribeBackgroundColor,
   evalTS,
 } from "../../../lib/utils/bolt";
import { render } from "react-dom";
import {StartContext} from '../../Context';

import Colors from './Colors';
import {Preloader} from './Preloader'
import {hexToRgb} from '../../../functionModule/function';
import {writeData} from '../../../functionModule/function';
import {readData} from '../../../functionModule/function';
import {rgbToHexOne} from '../../../functionModule/function';


function Tab_color (){



   //  state = {
   //       checkColorpicer: true,
   //      colors:[''],//["5b82b3","86cab9","d5e390","fafa98","fabb86"],
   //       oldColor: "0xdd1dd6",
   //       autoFill: false,
   //       // loading: true,
   //    }
      
      // pathWriteEndReadColor: string = '/public/settingsData/customColorData_01.json';             
      const {customData ={}, changeInput, writeDataContext, customColorSettings, handleCheckboxChange} = useContext (StartContext);
      
   const   replaceColor = (arrIndex)=>{  
         evalTS("replaceColorTS", {picker_check_value: customData.checkColorpicer, picker_path: __dirname, colorStart: customData.oldColor, arrIndex: arrIndex}).then((res) => {
            let colVal = hexToRgb(res);
            let resNew = rgbToHexOne(colVal);
            let newArr = customData.colors;
            newArr.splice(arrIndex, 1, resNew);
            customColorSettings(resNew, newArr);
         });
        };

   const  plusPal = ()=>{    
         evalTS("plusPalTS", {picker_check_value: customData.checkColorpicer, picker_path: __dirname, colorStart: customData.oldColor}).then((res) => {
               let colVal = hexToRgb(res);
               let resNew = rgbToHexOne(colVal);
               let newArr = customData.colors;
               newArr.push(resNew);
               customColorSettings(resNew, newArr);
         });
        };

   

 const  handleColorpickerChangeOn = (e: any) => {
      handleCheckboxChange({[e.target.name]: e.target.checked!});
   }
   


const   replaceAndMinusColor= (e:any)=> {     
      let arrIndex = +[e.target.id];
         if (e.ctrlKey) {
             let newArr = customData.colors;
             let oldcolor = customData.oldColor;
             newArr.splice(arrIndex, 1);
             customColorSettings(oldcolor, newArr);
         }else{
            replaceColor(arrIndex);
         }
   }

      // componentDidMount(): void {
      //   let dataColor = readData(this.pathWriteEndReadColor);
      //   const dataColorStart = JSON.parse(dataColor);
      //   this.setState({
      //    checkColorpicer: dataColorStart.checkColorpicer, 
      //    colors:dataColorStart.colors, 
      //    oldColor:dataColorStart.oldColor,
      //    autoFill:dataColorStart.autoFill,
      //    // loading: false,
      // });
      // }

      // componentDidUpdate(): void {
      //    writeData(this.state, this.pathWriteEndReadColor);
      //    if (this.state.autoFill=== true){
      //       this.colorSet()
      //    }
      // }
      
      const colorSet = () => {
         evalTS("colorSetTS", customData.colors).then((res) => {

      });
       };

   // render(){
       
      function openPanel(): void{
         csi.requestOpenExtension('com.Bolt-CEP_Test.cep.settings',0);
      }

      // const {checkColorpicer, colors, autoFill,/*loading,*/} = this.state

      return(
       <div className="bloc_palets tab-color tab-b visible">
       <fieldset className="field">
          <legend>Color</legend>
          <div className="colorP">
          <p>ColorPicker_AE</p>
          <input type="checkbox" checked={customData.checkColorpicer} onChange={handleColorpickerChangeOn} className="n_points  check" name="checkColorpicer"/>
          </div>
         {
          customData.colors.length ? (
          <div className="blok_palet">
            <Colors colors= {customData.colors} replaceAndMinusColor ={replaceAndMinusColor}/> 
          </div>
          ) : <Preloader/> 
          }
          <div className="colorP">
          <p>AutoFill</p>
          <input type="checkbox" checked={customData.autoFill} onChange={handleColorpickerChangeOn} className="n_points  check" name="autoFill"/>
          </div>
          <div className="buttons">
             <div onClick={plusPal} className="button bt1 disableElement" id="btnPlus"></div>
             <div onClick={colorSet} className="button bt3" id="btnApp">App</div>
             <div /*onClick={}*/ className="button bt4" id="btn_reset">Res</div>
          </div>
          <div className="buttons">
             <div  className="button bt5" >Save</div>
             <div onClick={openPanel} className="button bt6">ColorPal</div>
          </div>
     </fieldset>
    </div>
      );
   // }

 }





export default Tab_color;