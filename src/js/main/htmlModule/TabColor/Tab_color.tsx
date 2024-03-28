import React  from "react";
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
import Colors from './Colors'


class Tab_color extends React.Component <{}, {[key: string]: Array<string>| boolean}>{


    state = {
         checkColorpicer: false,
         colors: ["red","rgb(115, 209, 60)","white","yellow","1f8a70","bedb39","green","7f7fff","c1faec","d5e390","628f2e","14dcdc","fafa98","1f8a70","red"]
      }



   handleColorpickerChange = (e: any) => {
      this.setState({[e.target.name]: e.target.checked!});
   }
   
   plusPal= ()=> {
      alert ('PlusPal');
   }

   replaceColor= ()=> {
      alert ('replaceColor');
   }
   
   minusPal= ()=> {
      let arr = this.state.colors;
       arr.pop();
      this.setState({colors: arr});
   }

   render(){
      
      function proba(): void{
         alert('Ok');
      }
      function openPanel(): void{
         csi.requestOpenExtension('com.Bolt-CEP_Test.cep.settings',0);
      }

      const {checkColorpicer, colors} = this.state

      return(
       <div className="bloc_palets tab-color tab-b visible">
       <fieldset className="field">
          <legend>Color</legend>
          <div className="colorP">
          <p>ColorPicker_AE</p>
          <input type="checkbox" checked={checkColorpicer} onChange={this.handleColorpickerChange} className="n_points  check" name="checkColorpicer"/>
          </div>
          <div className="blok_palet">
            <Colors colors= {colors} replaceColor ={this.replaceColor}/>   
          </div>
          <div className="buttons">
             <div onClick={this.plusPal} className="button bt1 disableElement" id="btnPlus"></div>
             <div onClick={this.minusPal} className="button bt2" id="btnMinus"></div>
             <div className="button bt3" id="btnApp">App</div>
             <div className="button bt4" id="btn_reset">Res</div>
          </div>
          <div className="buttons">
             <div onClick={proba} className="button bt5" >Save</div>
             <div onClick={openPanel} className="button bt6">ColorPal</div>
          </div>
     </fieldset>
    </div>
      );
   }

 }





export default Tab_color;