import React from "react";
import { os, path } from "../../lib/cep/node";
import {
  csi,
  evalES,
  evalTS,
} from "../../lib/utils/bolt";


const jsxTest = () => {
   console.log(evalES(`helloWorld("${csi.getApplicationID()}")`));
 };


 class Tab_setting extends React.Component {

   constructor (props:string) {
      // interface State {
      //    num_el: number,
      //       res_w: number,
      //       res_h: number,
      //       frrate: number,
      //       dur : number,
      //       infl : number,
      // }
      super(props);
      this.state = {
         num_el: '5',
         res_w: '1920',
         res_h: '1080',
         frrate: '35',
         dur : '3',
         infl : '60',
      }
   }
      render() {
         
         return(
          <div className="settings tab-b hide">
             <fieldset className="field">
                <legend>Settings</legend>
                <div className="sett-bloc">
                   <div className="sett">
                      <p>N_element</p>
                      <input type="text" className="n_elem inp" name="num-element" min="2" max="15" defaultValue={this.state.num_el}/>
                   </div>
                   <div className="sett">
                      <p>Res</p>
                      <input type="text" className="resol resol-w  inp2" name="resolution" defaultValue={this.state.res_w}/>
                      <input type="text" className="resol resol-h  inp2" name="resolution" defaultValue={this.state.res_h}/>
                   </div>
                   <div className="sett">
                      <p>F/R   </p>
                      <input type="text" className="framerate n_points inp" name="framerate" defaultValue={this.state.frrate}/>
                   </div>
                   <div className="sett dur_set">
                      <p>Dur(sek)</p>
                      <input type="text" className="duration n_points inp" name="duration" defaultValue={this.state.dur}/>
                      <input type="checkbox" checked className="n_points one_dur" name="check_one-dur"/>
                   </div>
                   <div className="sett ">
                      <p>Inf( % )</p>
                      <input type="text" className="influ n_points inp" name="influence" defaultValue={this.state.infl}/>
                   </div>
                   <div className="sett">
                   <div className="button bt7">SetComp</div>
                   </div>
                </div>
             </fieldset>
          </div>
         );
      }
 }




export default Tab_setting;