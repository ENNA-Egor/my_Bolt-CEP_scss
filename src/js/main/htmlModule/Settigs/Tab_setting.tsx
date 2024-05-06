import React, {useContext} from 'react';
// import { os, path, fs } from '../../../lib/cep/node';
import { 
   //    csi,
   //  evalES, 
    evalTS
    } from '../../../lib/utils/bolt';
import { StartContext } from '../../Context';

// import { writeData } from '../../../functionModule/function';
// import { readData } from '../../../functionModule/function';



function Tab_setting () {


   const {customData ={}, changeInput, handleCheckboxChange, customSetting} = useContext (StartContext);

   const pathWriteEndReadSettings: string =
      '/public/settingsData/customSettigsData_01.json';

   const compCustomSettings = () => {
      evalTS('customSettingsTS', {
         custom_h: 1080,
         custom_w: 1920,
         custom_Nam: 'newComp',
         custom_Dur: 6,
         custom_FR: 25,
         lockDurations: customData.durLock,
      }).then((res) => {
         customSetting({
            resol_w: res.custom_w,
            resol_h: res.custom_h,
            fr_r: res.custom_FR,
            dur: res.custom_Dur,
         });
      });
   };

   const changeInputOn = (e: any) => {
      changeInput( [e.target.name], e.target.value );
   };

   const handleCheckboxChangeOn = (e: any) => {
      handleCheckboxChange( [e.target.name], e.target.checked);
   };


      return (
         
         
         <div className="settings tab-b hide">
            <fieldset className="field">
               <legend>Settings</legend>
               <div className="sett-bloc">
                  <div className="sett">
                     <p>N_element</p>
                     <input
                        onChange={changeInputOn}
                        className="n_elem inp"
                        name="num_element"
                        min="2"
                        max="15"
                        value={customData.num_element}
                     />
                  </div>
                  <div className="sett">
                     <p>Res</p>
                     <input
                        onChange={changeInputOn}
                        type="text"
                        className="resol resol-w  inp2"
                        name="resolution_w"
                        value={customData.resolution_w}
                     />
                     <input
                        onChange={changeInputOn}
                        type="text"
                        className="resol resol-h  inp2"
                        name="resolution_h"
                        value={customData.resolution_h}
                     />
                  </div>
                  <div className="sett">
                     <p>F/R </p>
                     <input
                        onChange={changeInputOn}
                        type="text"
                        className="framerate n_points inp"
                        name="framerate"
                        value={customData.framerate}
                     />
                  </div>
                  <div className="sett dur_set">
                     <p>Dur(sek)</p>
                     <input
                        onChange={changeInputOn}
                        type="text"
                        className="duration n_points inp"
                        name="duration"
                        value={customData.duration}
                     />
                     {/* <label> */}
                     <input
                        type="checkbox"
                        checked={customData.durLock}
                        onChange={handleCheckboxChangeOn}
                        className="n_points one_dur"
                        name="durLock"
                     />
                     <p className="lockCheck">lock</p>
                     {/* </label> */}
                  </div>
                  <div className="sett ">
                     <p>Inf( % )</p>
                     <input
                        onChange={changeInputOn}
                        type="text"
                        className="influ n_points inp"
                        name="influence"
                        value={customData.influence}
                     />
                  </div>
                  <div className="sett">
                     <div className="button bt7" onClick={compCustomSettings}>
                        SetComp
                     </div>
                  </div>
               </div>
            </fieldset>
         </div>
      );
   // }
}

export default Tab_setting;
