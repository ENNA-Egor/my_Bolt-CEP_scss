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
import {hexToRgb} from '../../../functionModule/function'
import {writeData} from '../../../functionModule/function'
import {readData} from '../../../functionModule/function'
import {rgbToHexOne} from '../../../functionModule/function'


class Tab_color extends React.Component {



    state = {
         checkColorpicer: true,
         colors: ["5b82b3","86cab9","d5e390","fafa98","fabb86"],
         oldColor: "0xdd1dd6",
      }
      
      pathWriteEndReadColor: string = '/public/settingsData/customColorData_01.json';             
      
      replaceColor = (arrIndex)=>{
         
         evalTS("replaceColorTS", {picker_check_value: this.state.checkColorpicer, picker_path: __dirname, colorStart: this.state.oldColor, arrIndex: arrIndex}).then((res) => {
            let colVal = hexToRgb(res);
            let resNew = rgbToHexOne(colVal);
            this.setState({oldColor: resNew});
            let newArr = this.state.colors;
            newArr.splice(arrIndex, 1, resNew);
            this.setState({colors: newArr});
         });
        };

        plusPal = ()=>{    
         evalTS("plusPalTS", {picker_check_value: this.state.checkColorpicer, picker_path: __dirname, colorStart: this.state.oldColor}).then((res) => {
               let colVal = hexToRgb(res);
               let resNew = rgbToHexOne(colVal);
               this.setState({ololdCor: resNew});
               let newArr = this.state.colors;
               newArr.push(resNew);
               this.setState({colors: newArr});
         });
        };
   

   handleColorpickerChange = (e: any) => {
      this.setState({[e.target.name]: e.target.checked!});
   }
   


   replaceAndMinusColor= (e:any)=> {     
      let arrIndex = +[e.target.id];
         if (e.ctrlKey) {
             let newArr = this.state.colors;
             newArr.splice(arrIndex, 1);
             this.setState({colors: newArr});
         }else{
            this.replaceColor(arrIndex)
         }
   }

      componentDidMount(): void {
        let dataColor = readData(this.pathWriteEndReadColor);
        const dataColorStart = JSON.parse(dataColor);
        this.setState({
         checkColorpicer: dataColorStart.checkColorpicer, 
         colors:dataColorStart.colors, 
         oldColor:dataColorStart.oldColor});
      }

      componentDidUpdate(): void {
         writeData(this.state, this.pathWriteEndReadColor);
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
            <Colors colors= {colors} replaceAndMinusColor ={this.replaceAndMinusColor}/>   
          </div>
          <div className="buttons">
             <div onClick={this.plusPal} className="button bt1 disableElement" id="btnPlus"></div>
             <div className="button bt3" id="btnApp">App</div>
             <div /*onClick={}*/ className="button bt4" id="btn_reset">Res</div>
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