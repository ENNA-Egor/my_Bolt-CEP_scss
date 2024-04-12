import React from "react";
import { os, path, fs } from "../../lib/cep/node";
import {
  csi,
  evalES,
  evalTS,
} from "../../lib/utils/bolt";
import {writeColorData} from '../../functionModule/function';


 class Tab_setting extends React.Component  {  
 
       state = {
          num_element: 5,
          resolution_w: 1920,
          resolution_h: 1080,
          framerate: 25,
          duration : 6,
          influence : 60,
          durLock: false,
       }
    // }

    pathWriteSettings: string = '/settingsData/customSettigsData_01.json';  

    compCustomSettings = ()=>{

      evalTS("customSettingsTS", { custom_h: 1080, custom_w: 1920, custom_Nam: 'newComp', custom_Dur: 6, custom_FR:  25, lockDurations: this.state.durLock}).then((res) => {

         this.setState({ resolution_w: res.custom_w});
         this.setState({ resolution_h: res.custom_h});
         this.setState({ framerate: res.custom_FR});
         this.setState({ duration: res.custom_Dur});

         writeColorData(JSON.stringify(res), this.pathWriteSettings);

         // const saveFolderPath = path.join(__dirname, '/settingsData');

         // if(!fs.existsSync(saveFolderPath)){

         //    fs.mkdir(saveFolderPath, { recursive: true }, (err) => {
         //       if (err) {
         //           console.log('Ошибка при создании папки:', err);
         //           return;
         //       } 
         //   });
         // } 

         // const saveFilePath = path.join(__dirname, '/settingsData/customSettigsData_01.json');
         // fs.writeFileSync(saveFilePath, JSON.stringify(res), {encoding: 'utf8', flag: 'w'});
        });
     };
      
      


   changeInput=(e:any ) => {
         this.setState({ [e.target.name]: e.target.value});
      }  

   handleCheckboxChange=(e:any ) => {

      this.setState({ [e.target.name]: e.target.checked!});
   }  
   

      render() {
         const {num_element, resolution_w, resolution_h, framerate, duration, influence, durLock} = this.state;
         return(
          <div className="settings tab-b hide">
             <fieldset className="field">
                <legend>Settings</legend>
                <div className="sett-bloc">
                   <div className="sett">
                      <p>N_element</p>
                      <input  onChange={this.changeInput} className="n_elem inp" name="num_element" min='2' max='15'  value={num_element} />
                   </div>
                   <div className="sett">
                      <p>Res</p>
                      <input  onChange={this.changeInput} type="text" className="resol resol-w  inp2" name="resolution_w" value={resolution_w}/>
                      <input  onChange={this.changeInput} type="text" className="resol resol-h  inp2" name="resolution_h" value={resolution_h}/>
                   </div>
                   <div className="sett">
                      <p>F/R   </p>
                      <input  onChange={this.changeInput} type="text" className="framerate n_points inp" name="framerate" value={framerate}/>
                   </div>
                   <div className="sett dur_set">
                      <p>Dur(sek)</p>
                      <input  onChange={this.changeInput} type="text" className="duration n_points inp" name="duration" value={duration}/>
                      {/* <label> */}
                      <input   type="checkbox" checked={durLock} onChange={this.handleCheckboxChange} className="n_points one_dur" name="durLock"/>                      
                      <p className="lockCheck">lock</p>
                      {/* </label> */}
                   </div>
                   <div className="sett ">
                      <p>Inf( % )</p>
                      <input  onChange={this.changeInput} type="text" className="influ n_points inp" name="influence" value={influence}/>
                   </div>
                   <div className="sett">
                   <div className="button bt7" onClick={this.compCustomSettings}>SetComp</div>
                   </div>
                </div>
             </fieldset>
          </div>
         );
      }
 }




export default Tab_setting;