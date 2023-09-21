function Tab_setting(){
    return(
     <div className="settings tab-b hide">
        <fieldset className="field">
           <legend>Settings</legend>
           <div className="sett-bloc">
              <div className="sett">
                 <p>N_element</p>
                 <input type="text" className="n_elem inp" name="num-element" min="2" max="15" value="5"/>
              </div>
              <div className="sett">
                 <p>Res</p>
                 <input type="text" className="resol resol-w  inp2" name="resolution" value="1920"/>
                 <input type="text" className="resol resol-h  inp2" name="resolution" value="1080"/>
              </div>
              <div className="sett">
                 <p>F/R   </p>
                 <input type="text" className="framerate n_points inp" name="framerate" value="25"/>
              </div>
              <div className="sett dur_set">
                 <p>Dur(sek)</p>
                 <input type="text" className="duration n_points inp" name="duration" value="6"/>
                 <input type="checkbox" checked className="n_points one_dur" name="check_one-dur"/>
              </div>
              <div className="sett ">
                 <p>Inf( % )</p>
                 <input type="text" className="influ n_points inp" name="influence" value="90"/>
              </div>
              <div className="sett">
              <div className="button bt7">SetComp</div>
              </div>
           </div>
        </fieldset>
     </div>
    );
 }




export default Tab_setting;