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
import hexToRgb from '../../../functionModule/function'
import writeColorData from '../../../functionModule/writeColorData'


class Tab_color extends React.Component <{}, {[key: string]: Array<string>| boolean}>{


    state = {
         checkColorpicer: true,
         colors: ["red","rgb(115, 209, 60)","white","yellow","LightCoral","Cyan","green","Fuchsia","Lime","DodgerBlue","Khaki","DeepPink","YellowGreen","Gold","red"]
      }

      replaceColor = (arrIndex)=>{

         evalTS("replaceColorTS", {picker_check_value: this.state.checkColorpicer, picker_path: __dirname, colorStart: '1664416', arrIndex: arrIndex}).then((res) => {
               alert (res);
               let colVal = hexToRgb(res);
               let newArr = this.state.colors;
               newArr.splice(arrIndex, 1, colVal);
               this.setState({colors: newArr});

               writeColorData(res);
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
   }

   replaceAndMinusColor= (e:any)=> {     
      let arrIndex = +[e.target.id];
         if (e.ctrlKey) {
             let newArr = this.state.colors;
             newArr.splice(arrIndex, 1);
             this.setState({colors: newArr});
         }else{
            alert('ReplaseColor');
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