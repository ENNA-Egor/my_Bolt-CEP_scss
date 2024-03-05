import React from "react";
import { os, path, fs } from "../../lib/cep/node";
import {
  csi,
  evalES,
  evalTS,
} from "../../lib/utils/bolt";


 class Tab_setting extends React.Component <{}, { [key: string]:  number }> {
    // constructor (props:string) {
 
       // super(props);
       state = {
          num_element: 5,
          resolution_w: 1920,
          resolution_h: 1080,
          framerate: 25,
          duration : 6,
          influence : 60,
       }
    // }
    
   compCustomSettings = ()=>{
      evalTS("customSettingsTS", { Custom_h: this.state.resolution_h, Custom_w: this.state.resolution_w, Custom_Nam: 'newComp', Custom_Dur: this.state.duration, Custom_FR:  this.state.framerate}).then((res) => {
         alert (typeof res);
         alert (res.Custom_w);
         alert (typeof res.Custom_w);
         // for (let key in res) {
         //    if(res.hasOwnProperty(key)){
         //      console.log(`${key}`)
         //      alert(`${key}`)
         //      alert(`${res.key}`)
         //    }
         //  }

         // const keys = Object.keys(res);
         //   keys.forEach(key => {
         //     console.log(`${key} : ${res[key]}`);
         //   });


         // this.setState({ resolution_h: res.Custom_h}); //это надо заключить в функцию и присваивать через цикл. См. выше.
         // this.setState({ resolution_w: res.Custom_w});
         const saveFolderPath = path.join(__dirname, '/settingsData');
         alert (saveFolderPath);

         if(!fs.existsSync(saveFolderPath)){

            fs.mkdir(saveFolderPath, { recursive: true }, (err) => {
               if (err) {
                   console.log('Ошибка при создании папки:', err);
                   return;
               } 
           });
         } 

         const saveFilePath = path.join(__dirname, '/settingsData/customSettigsData_01.json');
         alert (saveFilePath);
         fs.writeFileSync(saveFilePath, JSON.stringify(res), {encoding: 'utf8', flag: 'w'});
        });
     };
      
      


   changeInput=(e:any) => {
         console.log (e.target.name)
         console.log (e.target.value)
         this.setState({ [e.target.name]: e.target.value});
      }  
   

      render() {
         
         return(
          <div className="settings tab-b hide">
             <fieldset className="field">
                <legend>Settings</legend>
                <div className="sett-bloc">
                   <div className="sett">
                      <p>N_element</p>
                      <input  onChange={this.changeInput} className="n_elem inp" name="num_element" min='2' max='15'  value={this.state.num_element} />
                   </div>
                   <div className="sett">
                      <p>Res</p>
                      <input  onChange={this.changeInput} type="text" className="resol resol-w  inp2" name="resolution_w" value={this.state.resolution_w}/>
                      <input  onChange={this.changeInput} type="text" className="resol resol-h  inp2" name="resolution_h" value={this.state.resolution_h}/>
                   </div>
                   <div className="sett">
                      <p>F/R   </p>
                      <input  onChange={this.changeInput} type="text" className="framerate n_points inp" name="framerate" value={this.state.framerate}/>
                   </div>
                   <div className="sett dur_set">
                      <p>Dur(sek)</p>
                      <input  onChange={this.changeInput} type="text" className="duration n_points inp" name="duration" value={this.state.duration}/>
                      <input  onChange={this.changeInput} type="checkbox" checked className="n_points one_dur" name="check_one-dur"/>
                   </div>
                   <div className="sett ">
                      <p>Inf( % )</p>
                      <input  onChange={this.changeInput} type="text" className="influ n_points inp" name="influence" value={this.state.influence}/>
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