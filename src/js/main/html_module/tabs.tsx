import { useEffect, useState } from "react";
import { os, path } from "../lib/cep/node";
import {
  csi,
  evalES,
  evalFile,
  openLinkInBrowser,
  subscribeBackgroundColor,
  evalTS,
} from "../lib/utils/bolt";


const Tabs = () => {
    // const [bgColor, setBgColor] = useState("#282c34");
    
    // useEffect(() => {
    //   if (window.cep) {
    //     subscribeBackgroundColor(setBgColor);
    //   }
    // }, []);
  
    return (
            <div className="tabs-body">
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
                    <div className="tab-polygon tab-b">
                        <fieldset className="field">
                        <legend>Polygon</legend>
                        <div className="sett">
                        <label for="num_points" className="inp">Number Points</label>
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
                    <div className="bloc_palets tab-color tab-b ">
                        <fieldset className="field">
                        <legend>Color</legend>
                        <label for="check_color_pick" className="inp">ColorPicker_AE</label>
                        <input type="checkbox" checked className="n_points  check" name="check_color_pick"/>
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
                        <div className="buttons">
                            <div className="button bt1 disableElement" id="btnPlus"> + </div>
                            <div className="button bt2" id="btnMinus"> - </div>
                            <div className="button bt3" id="btnApp">App</div>
                            <div className="button bt4" id="btn_reset">Res</div>
                        </div>
                        <div className="buttons">
                            <div className="button bt5">Save</div>
                            {/* <div className="button bt6"><a href="colors.html" target="_blank">ColorPal</a></div> */}
                            <div className="button bt6">ColorPal</div>
                        </div>
                    </fieldset>
                    </div>
                    <div className="settings tab-b">
                        <fieldset className="field">
                        <legend>Settings</legend>
                        <div className="sett">
                            <label for="num-element" className="inp">Numb element</label>
                            <input type="number" className="n_elem inp" name="num-element" min="2" max="15" value="5"/>
                        </div>
                        <div className="sett">
                            <label for="resolution" className="inp">Res</label>
                            <input type="number" className="resol resol-w  inp" name="resolution" value="1920">
                            <input type="number" className="resol resol-h  inp" name="resolution" value="1080">
                        </div>
                        <div className="sett">
                            <label for="framerate" className="inp">Frame Rate   </label>
                            <input type="number" className="framerate n_points inp" name="framerate" value="25"/>
                        </div>
                        <div className="sett">
                            <label for="duration" className="inp">Duranion (sek)</label>
                            <input type="number" className="duration n_points inp" name="duration" value="6"/>
                        </div>
                        <div className="sett">
                            <label for="influence" className="inp">Influence ( % )</label>
                            <input type="number" className="influ n_points inp" name="influence" value="90"/>
                        </div>
                        </fieldset>
                    </div>
                </div> 
            </div>
        );
     };   

   export default Tabs;