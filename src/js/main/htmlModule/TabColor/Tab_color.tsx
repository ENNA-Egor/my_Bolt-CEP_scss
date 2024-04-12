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
import {readColorData} from '../../../functionModule/function'
import {rgbToHex} from '../../../functionModule/function'


class Tab_color extends React.Component {



    state = {
         checkColorpicer: true,
         colors: ["rgb(250, 0, 0)","rgb(115, 209, 60)","rgb(250, 250, 250)","rgb(0, 0, 250)","rgb(0, 250, 0)","rgb(100, 25, 50)","rgb(50, 20, 150)","rgb(210, 150, 10)","rgb(0, 25, 0)","rgb(50, 0, 0)","rgb(0, 50, 150)","rgb(150, 25, 50)","rgb(25, 50, 20)","rgb(50, 50, 25)"]
      }
      
      pathWriteColor: string = '/settingsData/colorData_01.json';             
      
      replaceColor = (arrIndex)=>{
         
         evalTS("replaceColorTS", {picker_check_value: this.state.checkColorpicer, picker_path: __dirname, colorStart: '1664416', arrIndex: arrIndex}).then((res) => {
            let colVal = hexToRgb(res);
            let newArr = this.state.colors;
            newArr.splice(arrIndex, 1, colVal);
            this.setState({colors: newArr});
            const colorsHex = rgbToHex (JSON.stringify(this.state.colors));
               writeData(colorsHex, this.pathWriteColor);
               // writeColorData(colVal);
            // const saveFolderPath = path.join(__dirname, '/settingsData');
   
            // if(!fs.existsSync(saveFolderPath)){
   
            //    fs.mkdir(saveFolderPath, { recursive: true }, (err) => {
            //       if (err) {
            //           console.log('Ошибка при создании папки:', err);
            //           return;
            //       } 
            //   });
            // } 
   
            // const saveFilePath = path.join(__dirname, '/settingsData/colorData_01.json');
            // fs.writeFileSync(saveFilePath, JSON.stringify(this.state.colors), {encoding: 'utf8', flag: 'w'});
           });
        };
   

   handleColorpickerChange = (e: any) => {
      this.setState({[e.target.name]: e.target.checked!});
   }
   
   plusPal= ()=> {
      let newArr = this.state.colors;
      newArr.push('rgb(0, 125, 255)');
      this.setState({colors: newArr});
      writeData(this.state.colors, this.pathWriteColor);
   }

   replaceAndMinusColor= (e:any)=> {     
      let arrIndex = +[e.target.id];
         if (e.ctrlKey) {
             let newArr = this.state.colors;
             newArr.splice(arrIndex, 1);
             this.setState({colors: newArr});
             writeData(this.state.colors, this.pathWriteColor);
         }else{
            this.replaceColor(arrIndex)
         }
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
             <div onClick={readColorData} className="button bt4" id="btn_reset">Res</div>
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