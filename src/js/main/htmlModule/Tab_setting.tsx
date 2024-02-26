import React from "react";
import { os, path } from "../../lib/cep/node";
import {
  csi,
  evalES,
  evalTS,
} from "../../lib/utils/bolt";
import { pathToFileURL } from "url";

const fs = require('fs');


// const jsxTest = () => {
//    console.log(evalES(`customSettingsComp("${csi.getApplicationID()}")`));
//  };

 
 //  type MyProps = { ... };
 // type MyState = { value: string };
 class Tab_setting extends React.Component <{}, { [key: string]: string }> {
    
    compCustomSettings = ()=>{
       evalTS("customSettingsTS", { Custom_h: Number(this.state.resolution_h), Custom_w: Number(this.state.resolution_w), Custom_Nam: 'newComp', Custom_Dur: Number(this.state.duration), Custom_FR:  Number(this.state.framerate)}).then((res) => {
          alert (typeof res);
          alert (res.Custom_w);
         //  fs.writeFileSync('./data_01.json', JSON.stringify(res), {encoding: 'utf8', flag: 'w'});
         });
      };
      
      //   res_h = Number({this.state.resolution_h});

   constructor (props:string) {

      super(props);
      this.state = {
         num_element: '5',
         resolution_w: '1920',
         resolution_h: '1080',
         framerate: '25',
         duration : '3',
         influence : '60',
      }
   }

   changeInput=(e:any) => {
         console.log (e.target.value)
         // let etar = e.target;
         this.setState({ [e.target.name]: e.target.value});
         // let vall = Number(e.target.value);
         // if (vall >15){
         //    this.setState({ num_el: '15'})
         // }else if 
         //    (vall < 1){
         //       this.setState({ num_el: '1'})
         // }else {
         //    this.setState({ num_el: e.target.value});
         // }
      }  
   



      render() {
         
         return(
          <div className="settings tab-b hide">
             <fieldset className="field">
                <legend>Settings</legend>
                <div className="sett-bloc">
                   <div className="sett">
                      <p>N_element</p>
                      <input  onChange={this.changeInput} className="n_elem inp" name="num_element" min='2' max='15'  defaultValue={this.state.num_element} />
                   </div>
                   <div className="sett">
                      <p>Res</p>
                      <input  onChange={this.changeInput} type="text" className="resol resol-w  inp2" name="resolution_w" defaultValue={this.state.resolution_w}/>
                      <input  onChange={this.changeInput} type="text" className="resol resol-h  inp2" name="resolution_h" defaultValue={this.state.resolution_h}/>
                   </div>
                   <div className="sett">
                      <p>F/R   </p>
                      <input  onChange={this.changeInput} type="text" className="framerate n_points inp" name="framerate" defaultValue={this.state.framerate}/>
                   </div>
                   <div className="sett dur_set">
                      <p>Dur(sek)</p>
                      <input  onChange={this.changeInput} type="text" className="duration n_points inp" name="duration" defaultValue={this.state.duration}/>
                      <input  onChange={this.changeInput} type="checkbox" checked className="n_points one_dur" name="check_one-dur"/>
                   </div>
                   <div className="sett ">
                      <p>Inf( % )</p>
                      <input  onChange={this.changeInput} type="text" className="influ n_points inp" name="influence" defaultValue={this.state.influence}/>
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