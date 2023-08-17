
// import React from "react";

 function Tabs(){
    return (
    <div className="tabs-body">
        <Tab_circle/>
        <Tab_polygon/>
        <Tab_color/>
        <Tab_setting/>
    </div> 

        );
     }  


     function Tab_circle(){
        return(
            <div className="tab-circle tab-b">
            <fieldset className="field">
            <legend>Circle</legend>
                <div className="circle-blok">
                    <div className="button buttonC">Create</div>
                </div>  
                <p>Cap</p>
                <div className="linecap_blok" >
                    <div className="button button_cap  but"></div>
                    <div className="button button_cap round"></div>
                </div> 
                <p>Add/End</p>
                <div className="add_end_blok" >
                    <div className="button button_plus"></div>
                    <div className="button button_minus"></div>
                </div>
            </fieldset>   
        </div>   
        );
     }

     function Tab_polygon(){
        return(
            <div className="tab-polygon tab-b">
            <fieldset className="field">
               <legend>Polygon</legend>
               <div className="polygon-blok point-blok">
               <p className="n_points">Number Points</p>
               <input type="number" className="n_points  inp" name="num_points" min="3" max="15" value="5"/>
               </div>
               <div className="polygon-blok">
                  <div className="button buttonP">Create</div>
               </div>  
               <p>Cap</p>
               <div className="linecap_blok" >
                  <div className="button button_cap  but"></div>
                  <div className="button button_cap round"></div>
               </div> 
               <p>Add/End</p>
               <div className="add_end_blok" >
                  <div className="button button_plus"></div>
                  <div className="button button_minus"></div>
               </div>
            </fieldset>
         </div>
        );
     }

     function Tab_color(){
        return(
         <div className="bloc_palets tab-color tab-b ">
         <fieldset className="field">
            <legend>Color</legend>
            <div className="colorP">
            <p>ColorPicker_AE</p>
            <input type="checkbox" checked className="n_points  check" name="check_color_pick"/>
            </div>
            <div className="blok_palet">
            <div className="palette pal_1" id="color1">1</div>
            <div className="palette pal_2">2</div>
            <div className="palette pal_3">3</div>
            <div className="palette pal_4">4</div>
            <div className="palette pal_5">5</div>
            <div className="palette pal_6">6</div>
            <div className="palette pal_7">7</div>
            <div className="palette pal_8">8</div>
            <div className="palette pal_9">9</div>
            <div className="palette pal_10">10</div>
            <div className="palette pal_11">11</div>
            <div className="palette pal_12">12</div>
            <div className="palette pal_13">13</div>
            <div className="palette pal_14">14</div>
            <div className="palette pal_15">15</div>
            </div>
            <div className="buttons">
               <div className="button bt1 disableElement" id="btnPlus"></div>
               <div className="button bt2" id="btnMinus"></div>
               <div className="button bt3" id="btnApp">App</div>
               <div className="button bt4" id="btn_reset">Res</div>
            </div>
            <div className="buttons">
               <div className="button bt5">Save</div>
               <div className="button bt6">ColorPal</div>
            </div>
       </fieldset>
      </div>
        );
     }
     function Tab_setting(){
        return(
         <div className="settings tab-b">
            <fieldset className="field">
               <legend>Settings</legend>
               <div className="sett-bloc">
                  <div className="sett">
                     <p>Numb element</p>
                     <input type="number" className="n_elem inp" name="num-element" min="2" max="15" value="5"/>
                  </div>
                  <div className="sett">
                     <p>Res</p>
                     <input type="number" className="resol resol-w  inp" name="resolution" value="1920"/>
                     <input type="number" className="resol resol-h  inp" name="resolution" value="1080"/>
                  </div>
                  <div className="sett">
                     <p>Frame Rate   </p>
                     <input type="number" className="framerate n_points inp" name="framerate" value="25"/>
                  </div>
                  <div className="sett">
                     <p>Duranion (sek)</p>
                     <input type="number" className="duration n_points inp" name="duration" value="6"/>
                     <input type="checkbox" checked className="n_points one_dur" name="check_color_pick"/>
                  </div>
                  <div className="sett">
                     <p>Influence ( % )</p>
                     <input type="number" className="influ n_points inp" name="influence" value="90"/>
                  </div>
                  <div className="sett">
                  <div className="button bt7">Setting Comp</div>
                  </div>
               </div>
            </fieldset>
         </div>
        );
     }



     export default Tabs;
