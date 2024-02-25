import React from "react";
import { os, path } from "../../lib/cep/node";
import {
  csi,
  evalES,
  evalTS,
} from "../../lib/utils/bolt";


const jsxTestt = () => {
   console.log(evalES(`customSettingsComp("${csi.getApplicationID()}")`));
 };

 const compCustomSettings = ()=>{
   evalTS("helloObj", { height: 90, width: 100 }).then((res) => {
      alert (JSON.stringify(res))
    });
 }

//  type MyProps = { ... };
// type MyState = { value: string };
 class Tab_setting extends React.Component <{}, { [key: string]: string }> {

   constructor (props:string) {

      super(props);
      this.state = {
         num_el: '5',
         res_w: '1920',
         res_h: '1080',
         frrate: '35',
         dur : '6',
         infl : '60',
      }
   }

   changeInput=(e:any) => {
         console.log (e.target.value)
         let etar = e.target;
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
                      <input  onChange={this.changeInput} className="n_elem inp" name="num-element" min='2' max='15'  defaultValue={this.state.num_el} />
                   </div>
                   <div className="sett">
                      <p>Res</p>
                      <input  onChange={this.changeInput} type="text" className="resol resol-w  inp2" name="resolution" defaultValue={this.state.res_w}/>
                      <input  onChange={this.changeInput} type="text" className="resol resol-h  inp2" name="resolution" defaultValue={this.state.res_h}/>
                   </div>
                   <div className="sett">
                      <p>F/R   </p>
                      <input  onChange={this.changeInput} type="text" className="framerate n_points inp" name="framerate" defaultValue={this.state.frrate}/>
                   </div>
                   <div className="sett dur_set">
                      <p>Dur(sek)</p>
                      <input  onChange={this.changeInput} type="text" className="duration n_points inp" name="duration" defaultValue={this.state.dur}/>
                      <input  onChange={this.changeInput} type="checkbox" checked className="n_points one_dur" name="check_one-dur"/>
                   </div>
                   <div className="sett ">
                      <p>Inf( % )</p>
                      <input  onChange={this.changeInput} type="text" className="influ n_points inp" name="influence" defaultValue={this.state.infl}/>
                   </div>
                   <div className="sett">
                   <div className="button bt7" onClick={jsxTest}>SetComp</div>
                   </div>
                </div>
             </fieldset>
          </div>
         );
      }
 }




export default Tab_setting;